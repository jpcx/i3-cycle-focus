#!/usr/bin/env node

/**
 * @author Justin Collier <jpcxme@gmail.com>
 * @license MIT
 * @see {@link http://github.com/jpcx/i3-cycle-focus|GitHub}
 */

'use strict'

const i3 = require('i3').createClient()
const dp = require('deep-props')
const { spawn } = require('child_process')

const mode = process.argv[2]

/**
 * Throws an error to the window manager by using the i3-nagbar tool.
 *
 * @function throwToI3
 * @param    {Error} err - Error being thrown.
 */
const throwToI3 = err => {
  spawn('i3-nagbar', [
    '-t',
    'error',
    '-m',
    `altTab.js has thrown an error! ${err.message || err}`
  ])
  process.exit()
}

/**
 * Array of workspace information.
 *
 * @typedef {Array} I3Data-workspaces
 */

/**
 * Object containing i3 tree structure.
 *
 * @typedef {Object} I3Data-tree
 */

/**
 * Contains information about the i3 state.
 *
 * @typedef  {Object} I3Data
 * @property {I3Data-workspaces} workspaces - Array of workspace information.
 * @property {I3Data-tree}       tree       - Object containing i3 tree structure.
 */

/**
 * Loads i3 workspaces and tree using the i3 module.
 *
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
 * Creates an array of locations and window IDs used for retrieving information about content windows within the {@link I3Data-tree}.
 *
 * @typedef  {Object} WindowLocator
 * @property {Array}  path  - Path to window ID
 * @property {number} value - Window ID
 */

/**
 * Gets an array of content window locators.
 *
 * @function getContentWindowLocators
 * @param    {I3Data-tree} tree - Object containing i3 tree structure.
 * @return   {WindowLocator[]}  Array of window locators
 */
const getContentWindowLocators = tree =>
  dp.extract(tree).reduce((a, v) => {
    if (v.path.slice(-1)[0] === 'window' && v.value) {
      a.push(v)
    }
    return a
  }, [])

/**
 * Gets an array of visible workspace names.
 *
 * @function getVisibleWorkspaces
 * @param    {I3Data-workspaces} workspaces - Array of workspace information.
 * @return   {Set} Set of names of visible workspaces.
 */
const getVisibleWorkspaces = workspaces => {
  if (!Array.isArray(workspaces)) workspaces = [workspaces]
  const names = new Set()
  for (let ws of workspaces) {
    if (ws.visible === true) {
      names.add(ws.name)
    }
  }
  return names
}

/**
 * Checks if a window locator is within a visible workspace.
 *
 * @function isWithinVisibleWorkspace
 * @param    {I3Data-tree}      tree              - Object containing i3 tree structure.
 * @param    {Set}              visibleWorkspaces - Set of names of visible workspaces.
 * @param    {WindowLocator}    locator           - Window locator.
 * @return   {boolean}          True if within visible workspace.
 */
const isWithinVisibleWorkspace = (tree, visibleWorkspaces, locator) => {
  for (let i = 1; i < locator.path.length; i++) {
    const parent = dp.get(tree, locator.path.slice(0, -1 * i))
    if (parent.type === 'workspace' && visibleWorkspaces.has(parent.name)) {
      return true
    }
  }
  return false
}

/**
 * Gets a list of windows located within visible workspaces.
 *
 * @function getVisibleWindows
 * @param    {I3Data-tree}      tree              - Object containing i3 tree structure.
 * @param    {Set}              visibleWorkspaces - Set of names of visible workspaces.
 * @param    {WindowLocator[]}  locators          - Array of window locators.
 * @return   {Array}            IDs of visible windows.
 */
const getVisibleWindows = (tree, visibleWorkspaces, locators) => {
  const visibleWindows = []
  for (let locator of locators) {
    if (isWithinVisibleWorkspace(tree, visibleWorkspaces, locator)) {
      visibleWindows.push(locator.value)
    }
  }
  return visibleWindows
}

/**
 * Gets the window ID of the current focused window.
 *
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

/**
 * Coordinates object.
 *
 * @typedef  {Object} Coords
 * @property {number} x - Integer value of x coordinate.
 * @property {number} y - Integer value of y coordinate.
 */

/**
 * Gets the coordinates of the center of a given window.
 *
 * @function getWindowCenterCoords
 * @param    {I3Data-tree} tree     - Object containing i3 tree structure.
 * @param    {number}      windowID - ID of focused window.
 * @return   {Coords}      Coordinates of center.
 */
const getWindowCenterCoords = (tree, windowID) =>
  dp.extract(tree).reduce((a, v) => {
    if (v.path.slice(-1)[0] === 'window' && v.value === windowID) {
      const rect = dp.get(tree, v.path.slice(0, -1)).rect
      return {
        x: rect.x + ~~(rect.width / 2),
        y: rect.y + ~~(rect.height / 2)
      }
    }
    return a
  })

/**
 * Gets the ID of the window that should be focused next.
 *
 * @function getNextWindowID
 * @param    {I3Data} i3Data - I3 Data.
 * @return   {number} ID of desired window.
 */
const getNextWindowID = i3Data => {
  const locators = getContentWindowLocators(i3Data.tree)
  const visibleWorkspaces = getVisibleWorkspaces(i3Data.workspaces)
  const visibleWindows = getVisibleWindows(
    i3Data.tree,
    visibleWorkspaces,
    locators
  )
  const focusedWindow = getFocusedWindow(i3Data.tree)
  if (visibleWindows.includes(focusedWindow)) {
    let index = visibleWindows.indexOf(focusedWindow)
    if (mode !== 'reverse' && mode !== '--reverse') {
      if (++index < visibleWindows.length) {
        return visibleWindows[index]
      } else {
        return visibleWindows[0]
      }
    } else {
      if (--index >= 0) {
        return visibleWindows[index]
      } else {
        return visibleWindows.slice(-1)[0]
      }
    }
  } else {
    return visibleWindows[0]
  }
}

/**
 * Moves the mouse cursor to a desired coordinate set.
 *
 * @function moveMouse
 * @param    {Coords}  - Coordinate object.
 * @return   {Promise} - Resolves once xdotool process has exited; rejects on child process errors.
 */
const moveMouse = coords =>
  new Promise((resolve, reject) => {
    try {
      const xdotoolProcess = spawn('xdotool', ['mousemove', coords.x, coords.y])
      xdotoolProcess.on('exit', code => {
        resolve()
      })
      xdotoolProcess.on('error', err => {
        reject(err)
      })
    } catch (err) {
      reject(err)
    }
  })

/**
 * Focuses the window with a given ID.
 *
 * @function focusWindow
 * @param    {number} windowID - ID of desired window.
 */
const focusWindow = windowID =>
  new Promise((resolve, reject) => {
    i3.command(`[id="${windowID}"] focus`, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })

loadI3Data()
  .then(i3Data => {
    const windowID = getNextWindowID(i3Data)
    const coords = getWindowCenterCoords(i3Data.tree, windowID)
    focusWindow(windowID)
      .then(() => {
        moveMouse(coords)
          .then(() => process.exit())
          .catch(throwToI3)
      })
      .catch(throwToI3)
  })
  .catch(throwToI3)
