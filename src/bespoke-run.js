bespoke.plugins.run = function(deck) {

  var runners = $("[data-bespoke-run]");
  runners.attr("href", "#");

  runners.click(function() {
    var script = $(".bespoke-active code").text();

    new Function(script)();

    return false;
  });
};
