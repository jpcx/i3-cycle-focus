# i3-alt-tab-visible

[![NPM](https://nodei.co/npm/i3-alt-tab-visible.png)](https://nodei.co/npm/i3-alt-tab-visible/)

Simulates an alt-tab operation for visible windows using the i3 window manager. Shifts the mouse cursor position to the center of newly focused window using xdotool.

## Getting Started

### Prerequisites

+ Node.JS version 8.3.0 or above.
+ i3 window manager
+ i3-nagbar
+ xdotool

### Installing

```console
npm i -g i3-alt-tab-visible
```

### Deployment

The command must be bound to the i3 config. This is usually `~/.config/i3/config`. The following lines will bind the script to alt+tab for forward cycling and alt+shift+tab for reverse cycling.

```ini
bindsym Mod1+Tab       exec --no-startup-id i3-alt-tab-visible
bindsym Mod1+Shift+Tab exec --no-startup-id i3-alt-tab-visible --reverse
```

## Documentation

Documentation generated from jsdoc is located [here](https://github.com/jpcx/i3-alt-tab-visible/blob/0.1.0/docs/global.md).

If you want to build and open the jsdoc HTML yourself, run these commands:

```console
npm run-script build-jsdoc --prefix=$(npm root -g)/i3-alt-tab-visible
chromium $(npm root -g)/i3-alt-tab-visible/docs/jsdoc/index.html
```

_Note: this assumes that you have installed the package globally._

_Note: replace chromium with your browser of choice._

## Testing

Testing provided by the jest library.

Package must be installed globally in order to test!

Additionally, at least two windows must be visible during the test. Also, please don't move the mouse or do anything to modify focus.

Please run the following commands to install testing dependencies and to run the test:

```console
npm i -d --prefix=$(npm root -g)/i3-alt-tab-visible
npm test --prefix=$(npm root -g)/i3-alt-tab-visible
```

## Versioning

Versioned using [SemVer](http://semver.org/). For available versions, see the [Changelog](https://github.com/jpcx/i3-alt-tab-visible/blob/0.1.0/CHANGELOG.md).

## Contribution

Please raise an issue if you find any. Pull requests are welcome!

## Author

**Justin Collier** - [jpcx](https://github.com/jpcx)

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/jpcx/i3-alt-tab-visible/blob/0.1.0/LICENSE) file for details