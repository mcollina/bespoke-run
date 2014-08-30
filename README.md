[![Build Status](https://secure.travis-ci.org/mcollina/bespoke-run.png?branch=master)](https://travis-ci.org/mcollina/bespoke-run)

# bespoke-run

Run your code snippets in [Bespoke.js](http://markdalgleish.com/projects/bespoke.js)

## Download

Download the [production version][min] or the [development version][max], or use a [package manager](#package-managers).

[min]: https://raw.github.com/mcollina/bespoke-run/master/dist/bespoke-run.min.js
[max]: https://raw.github.com/mcollina/bespoke-run/master/dist/bespoke-run.js

## Usage

This plugin is shipped in a [UMD format](https://github.com/umdjs/umd), meaning that it is available as a CommonJS/AMD module or browser global.

For example, when using CommonJS modules:
```

```js
var bespoke = require('bespoke'),
  classes = require('bespoke-classes');
  camera = require('bespoke-run');

bespoke.from('article', [
  classes(),
  run()
]);
```

When using browser globals:

```js
bespoke.from('article', [
  bespoke.plugins.classes(),
  bespoke.plugins.run()
]);
```

When you want to run a piece of code in your browser, just put it
between `<code></code>` tags, then add an anchor with the
`'data-bespoke-run'` property, like so:

```javascript
<section>
  <code>alert(2 + 2)</code>
  <a data-bespoke-run>Run!</a>
</section>
```

If you want your code snippet to run automatically before advancing to
the next slide, just do:

```javascript
<section>
  <code data-bespoke-autorun>alert(2 + 2)</code>
</section>
```

## Package managers

### Bower

```bash
$ bower install bespoke-run
```

### npm

```bash
$ npm install bespoke-run
```

## Credits

This plugin was built with [generator-bespokeplugin](https://github.com/markdalgleish/generator-bespokeplugin).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
