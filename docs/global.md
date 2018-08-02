# i3-cycle-focus

## Methods

<a name="focusWindow"></a>

### focusWindow(windowID)

Focuses the window with a given ID.

__Parameters:__

| Name | Type | Description |
| --- | --- | --- |
| `windowID` | number | ID of desired window. |

Source:

* [i3-cycle-focus/index.js](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/index.js), [line 252](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/index.js#L252)

<a name="getContentWindowLocators"></a>

### getContentWindowLocators(tree) → \{Array.<[WindowLocator](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/docs/global.md#WindowLocator)>}

Gets an array of content window locators.

__Parameters:__

| Name | Type | Description |
| --- | --- | --- |
| `tree` | [I3Data-tree](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/docs/global.md#I3Data-tree) | Object containing i3 tree structure. |

Source:

* [i3-cycle-focus/index.js](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/index.js), [line 78](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/index.js#L78)

__Returns:__

Array of window locators

___Type:___

* Array.<[WindowLocator](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/docs/global.md#WindowLocator)>

<a name="getFocusedWindow"></a>

### getFocusedWindow(tree) → \{number}

Gets the window ID of the current focused window.

__Parameters:__

| Name | Type | Description |
| --- | --- | --- |
| `tree` | [I3Data-tree](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/docs/global.md#I3Data-tree) | Object containing i3 tree structure. |

Source:

* [i3-cycle-focus/index.js](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/index.js), [line 149](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/index.js#L149)

__Returns:__

ID of focused window.

___Type:___

* number

<a name="getNextWindowID"></a>

### getNextWindowID(i3Data) → \{number}

Gets the ID of the window that should be focused next.

__Parameters:__

| Name | Type | Description |
| --- | --- | --- |
| `i3Data` | [I3Data](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/docs/global.md#I3Data) | I3 Data. |

Source:

* [i3-cycle-focus/index.js](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/index.js), [line 194](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/index.js#L194)

__Returns:__

ID of desired window.

___Type:___

* number

<a name="getVisibleWindows"></a>

### getVisibleWindows(tree, visibleWorkspaces, locators) → \{Array}

Gets a list of windows located within visible workspaces.

__Parameters:__

| Name | Type | Description |
| --- | --- | --- |
| `tree` | [I3Data-tree](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/docs/global.md#I3Data-tree) | Object containing i3 tree structure. |
| `visibleWorkspaces` | Array | Array of names of visible workspaces. |
| `locators` | Array.<[WindowLocator](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/docs/global.md#WindowLocator)> | Array of window locators. |

Source:

* [i3-cycle-focus/index.js](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/index.js), [line 130](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/index.js#L130)

__Returns:__

IDs of visible windows.

___Type:___

* Array

<a name="getVisibleWorkspaces"></a>

### getVisibleWorkspaces(workspaces) → \{Array}

Gets an array of visible workspace names.

__Parameters:__

| Name | Type | Description |
| --- | --- | --- |
| `workspaces` | [I3Data-workspaces](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/docs/global.md#I3Data-workspaces) | Array of workspace information. |

Source:

* [i3-cycle-focus/index.js](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/index.js), [line 93](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/index.js#L93)

__Returns:__

Array of names of visible workspaces.

___Type:___

* Array

<a name="getWindowCenterCoords"></a>

### getWindowCenterCoords(tree, windowID) → \{[Coords](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/docs/global.md#Coords)}

Gets the coordinates of the center of a given window.

__Parameters:__

| Name | Type | Description |
| --- | --- | --- |
| `tree` | [I3Data-tree](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/docs/global.md#I3Data-tree) | Object containing i3 tree structure. |
| `windowID` | number | ID of focused window. |

Source:

* [i3-cycle-focus/index.js](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/index.js), [line 174](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/index.js#L174)

__Returns:__

Coordinates of center.

___Type:___

* [Coords](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/docs/global.md#Coords)

<a name="isWithinVisibleWorkspace"></a>

### isWithinVisibleWorkspace(tree, visibleWorkspaces, locator) → \{boolean}

Checks if a window locator is within a visible workspace.

__Parameters:__

| Name | Type | Description |
| --- | --- | --- |
| `tree` | [I3Data-tree](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/docs/global.md#I3Data-tree) | Object containing i3 tree structure. |
| `visibleWorkspaces` | Array | Array of names of visible workspaces. |
| `locator` | [WindowLocator](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/docs/global.md#WindowLocator) | Window locator. |

Source:

* [i3-cycle-focus/index.js](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/index.js), [line 111](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/index.js#L111)

__Returns:__

True if within visible workspace.

___Type:___

* boolean

<a name="loadI3Data"></a>

### loadI3Data() → \{[I3Data](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/docs/global.md#I3Data)}

Loads i3 workspaces and tree using the i3 module.

Source:

* [i3-cycle-focus/index.js](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/index.js), [line 53](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/index.js#L53)

__Returns:__

I3 data.

___Type:___

* [I3Data](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/docs/global.md#I3Data)

<a name="moveMouse"></a>

### moveMouse() → \{Promise}

Moves the mouse cursor to a desired coordinate set.

__Parameters:__

| Type | Description |
| --- | --- |
| [Coords](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/docs/global.md#Coords) | Coordinate object. |

Source:

* [i3-cycle-focus/index.js](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/index.js), [line 230](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/index.js#L230)

__Returns:__

\- Resolves once xdotool process has exited; rejects on child process errors.

___Type:___

* Promise

<a name="throwToI3"></a>

### throwToI3(err)

Throws an error to the window manager by using the i3-nagbar tool.

__Parameters:__

| Name | Type | Description |
| --- | --- | --- |
| `err` | Error | Error being thrown. |

Source:

* [i3-cycle-focus/index.js](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/index.js), [line 17](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/index.js#L17)

## Type Definitions

<a name="Coords"></a>

### Coords

Coordinates object.

__Type:__

* Object

__Properties:__

| Name | Type | Description |
| --- | --- | --- |
| `x` | number | Integer value of x coordinate. |
| `y` | number | Integer value of y coordinate. |

Source:

* [i3-cycle-focus/index.js](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/index.js), [line 166](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/index.js#L166)

<a name="I3Data"></a>

### I3Data

Contains information about the i3 state.

__Type:__

* Object

__Properties:__

| Name | Type | Description |
| --- | --- | --- |
| `workspaces` | [I3Data-workspaces](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/docs/global.md#I3Data-workspaces) | Array of workspace information. |
| `tree` | [I3Data-tree](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/docs/global.md#I3Data-tree) | Object containing i3 tree structure. |

Source:

* [i3-cycle-focus/index.js](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/index.js), [line 45](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/index.js#L45)

<a name="I3Data-tree"></a>

### I3Data-tree

Object containing i3 tree structure.

__Type:__

* Object

Source:

* [i3-cycle-focus/index.js](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/index.js), [line 39](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/index.js#L39)

<a name="I3Data-workspaces"></a>

### I3Data-workspaces

Array of workspace information.

__Type:__

* Array

Source:

* [i3-cycle-focus/index.js](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/index.js), [line 33](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/index.js#L33)

<a name="WindowLocator"></a>

### WindowLocator

Creates an array of locations and window IDs used for retrieving information about content windows within the [I3Data-tree](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/docs/global.md#I3Data-tree).

__Type:__

* Object

__Properties:__

| Name | Type | Description |
| --- | --- | --- |
| `path` | Array | Path to window ID |
| `value` | number | Window ID |

Source:

* [i3-cycle-focus/index.js](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/index.js), [line 70](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/index.js#L70)

---

## [Home](https://github.com/jpcx/i3-cycle-focus/tree/0.1.0/)

* [focusWindow](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/docs/global.md#focusWindow)
* [getContentWindowLocators](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/docs/global.md#getContentWindowLocators)
* [getFocusedWindow](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/docs/global.md#getFocusedWindow)
* [getNextWindowID](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/docs/global.md#getNextWindowID)
* [getVisibleWindows](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/docs/global.md#getVisibleWindows)
* [getVisibleWorkspaces](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/docs/global.md#getVisibleWorkspaces)
* [getWindowCenterCoords](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/docs/global.md#getWindowCenterCoords)
* [isWithinVisibleWorkspace](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/docs/global.md#isWithinVisibleWorkspace)
* [loadI3Data](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/docs/global.md#loadI3Data)
* [moveMouse](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/docs/global.md#moveMouse)
* [throwToI3](https://github.com/jpcx/i3-cycle-focus/blob/0.1.0/docs/global.md#throwToI3)