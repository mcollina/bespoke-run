
var lastCalledValue = null;

function dummyCall(value) {
  lastCalledValue = value;
}

(function() {
  'use strict';

  describe("bespoke-run", function() {

    var deck;

    var createDeck = function() {
      var parent = document.createElement("article");

      var section = document.createElement("section");
      section.innerHTML =
        "<code>dummyCall(true);</code>" +
        "<a data-bespoke-run>Run!</a>";

      parent.appendChild(section);
      document.body.appendChild(parent);

      deck = bespoke.from(parent, {
        run: true
      });
    };

    var click = function(el){
      var ev = document.createEvent("MouseEvent");
      ev.initMouseEvent( "click", true /* bubble */, true /* cancelable */, window, null, 0, 0, 0, 0, /* coordinates */ false, false, false, false, /* modifier keys */ 0 /*left*/, null);
      el.dispatchEvent(ev);
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
        expect(document.querySelector("a[data-bespoke-run]").getAttribute("href")).toEqual("#");
      });

      it("should execute the current code", function() {
        [].forEach.call(document.querySelectorAll("a[data-bespoke-run]"), click);
        expect(lastCalledValue).toBe(true);
      });
    });

  });

}());
