/*!
 * bespoke-run v0.0.3
 * https://github.com/mcollina/bespoke-run
 *
 * Copyright 2014, Matteo Collina
 * This content is released under the MIT license
 */

bespoke.plugins.run = function(deck) {

  [].forEach.call(document.querySelectorAll("[data-bespoke-run]"), function(runner) {

    runner.setAttribute("href", "#");

    runner.addEventListener("click", function(e) {
      var script = document.querySelector(".bespoke-active code").innerText;

      new Function(script)();

      e.preventDefault();
    });

  });

};
