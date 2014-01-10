/*!
 * bespoke-run v0.0.1
 * https://github.com/mcollina/bespoke-run
 *
 * Copyright 2014, Matteo Collina
 * This content is released under the MIT license
 */

bespoke.plugins.run = function(deck) {

  var runners = $("[data-bespoke-run]");
  runners.attr("href", "#");

  runners.click(function() {
    var script = $(".bespoke-active code").text();

    new Function(script)();

    return false;
  });
};
