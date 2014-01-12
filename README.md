[![Build Status](https://secure.travis-ci.org/mcollina/bespoke-run.png?branch=master)](https://travis-ci.org/mcollina/bespoke-run)

# bespoke-run

Run your code snippets in [Bespoke.js](http://markdalgleish.com/projects/bespoke.js)

## Download

Download the [production version][min] or the [development version][max], or use a [package manager](#package-managers).

[min]: https://raw.github.com/mcollina/bespoke-run/master/dist/bespoke-run.min.js
[max]: https://raw.github.com/mcollina/bespoke-run/master/dist/bespoke-run.js

## Usage

First, include both `bespoke.js` and `bespoke-run.js` in your page.

Then, simply include the plugin when instantiating your presentation.

```js
bespoke.from('article', {
  run: true
});
```

You should also include jQuery or a jQuery-compatible library.

## Package managers

### Bower

```bash
$ bower install bespoke-run
```

### npm

```bash
$ npm install bespoke-run
```

The bespoke-run npm package is designed for use with [browserify](http://browserify.org/), e.g.

```js
require('bespoke');
require('bespoke-run');
```

## Credits

This plugin was built with [generator-bespokeplugin](https://github.com/markdalgleish/generator-bespokeplugin).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
