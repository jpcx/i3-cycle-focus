/**
 * @author Justin Collier <jpcxme@gmail.com>
 * @license MIT
 * @see {@link http://github.com/jpcx/i3-cycle-focus|GitHub}
 */

'use strict'

const i3 = require('i3').createClient()
const dp = require('deep-props')
const { spawn } = require('child_process')

/**
 * Array of workspace information.
 *
 * @private
 * @typedef {Array} I3Data-workspaces
 */

/**
 * Object containing i3 tree structure.
 *
 * @private
 * @typedef {Object} I3Data-tree
 */

/**
 * Contains information about the i3 state.
 *
 * @private
 * @typedef  {Object} I3Data
 * @property {I3Data-workspaces} workspaces - Array of workspace information.
 * @property {I3Data-tree}       tree       - Object containing i3 tree structure.
 */

/**
 * Loads i3 workspaces and tree using the i3 module.
 *
 * @private
 * @function loadI3Data
 * @return   {I3Data} I3 data.
 */
const loadI3Data = () =>
  new Promise((resolve, reject) => {
    i3.workspaces((err, workspaces) => {
      if (err) reject(err)
      i3.tree((err, tree) => {
        if (err) reject(err)
        resolve({ workspaces, tree })
      })
    })
  })

/**
 * Gets the window ID of the current focused window.
 *
 * @private
 * @function getFocusedWindow
 * @param    {I3Data-tree} tree - Object containing i3 tree structure.
 * @return   {number}      ID of focused window.
 */
const getFocusedWindow = tree =>
  dp.extract(tree).reduce((a, v) => {
    if (v.path.slice(-1)[0] === 'window' && v.value) {
      if (dp.get(tree, v.path.slice(0, -1)).focused === true) {
        return v.value
      }
    }
    return a
  })

const forwardHist = []
const reverseHist = []

test(`Shifts focus`, async () => {
  try {
    let activity = false
    i3.on('window', data => {
      if (data.change === 'focus' && data.container) {
        activity = true
        forwardHist.push(data.container.window)
        expect(forwardHist.length).toBe(2)
        expect(forwardHist[0] === forwardHist[1]).toBe(false)
        i3.removeAllListeners()
      }
    })
    const i3Data = await loadI3Data()
    forwardHist.push(getFocusedWindow(i3Data.tree))
    spawn('i3-cycle-focus')
    await new Promise(resolve => setTimeout(resolve, 2000))
    expect(activity).toBe(true)
  } catch (err) {
    throw err
  }
})

test(
  `Shifts focus reversely`,
  async () => {
    try {
      let activity = false
      i3.on('window', data => {
        if (data.change === 'focus' && data.container) {
          activity = true
          reverseHist.push(data.container.window)
          expect(reverseHist.length).toBe(2)
          expect(reverseHist[0] === reverseHist[1]).toBe(false)
          expect(forwardHist[0]).toBe(reverseHist[1])
          expect(reverseHist[0]).toBe(forwardHist[1])
          i3.removeAllListeners()
        }
      })
      const i3Data = await loadI3Data()
      reverseHist.push(getFocusedWindow(i3Data.tree))
      spawn('i3-cycle-focus', ['--reverse'])
      await new Promise(resolve => setTimeout(resolve, 2000))
      expect(activity).toBe(true)
    } catch (err) {
      throw err
    }
  }
)

afterAll(() => setTimeout(() => process.exit(), 1000))
