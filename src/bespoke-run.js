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
