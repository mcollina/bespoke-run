
var lastCalledValue = null;

function dummyCall(value) {
  lastCalledValue = value;
}

(function() {
  'use strict';

  describe("bespoke-run", function() {

    var deck;

    var createDeck = function() {
      var parent = $("<article>");

      var section = $("<section>");
      section.append("<code>dummyCall(true);</code>")
      section.append("<a data-bespoke-run>Run!</a>")

      parent.append(section);
      $("body").append(parent);

      deck = bespoke.from(parent.get(0), {
        run: true
      });
    };

    beforeEach(createDeck);

    afterEach(function() {
      lastCalledValue = null;
    });

    describe("deck.slide", function() {

      beforeEach(function() {
        deck.slide(0);
      });

      it("should add a href to the run link", function() {
        expect($("a[data-bespoke-run]").attr("href")).toEqual("#");
      });

      it("should execute the current code", function() {
        $("a[data-bespoke-run]").click();
        expect(lastCalledValue).toBe(true);
      });
    });

  });

}());
