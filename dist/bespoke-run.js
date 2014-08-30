/*!
 * bespoke-run v1.0.0
 * https://github.com/mcollina/bespoke-run
 *
 * Copyright 2014, Matteo Collina
 * This content is released under the MIT license
 */

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self);var o=n;o=o.bespoke||(o.bespoke={}),o=o.plugins||(o.plugins={}),o.run=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){

module.exports = function(options) {
  return function(deck) {

    var lastSlide = -1;

    [].forEach.call(document.querySelectorAll("[data-bespoke-run]"), function(runner) {

      runner.setAttribute("href", "#");

      runner.addEventListener("click", function(e) {
        deck.fire("runCurrentCode");
        e.preventDefault();
      });

    });

    deck.on("runCurrentCode", function() {
      var el = document.querySelector(".bespoke-active code");

      if (el) {
        new Function(el.innerText)();
      } else {
        throw 'No code element on this slide, or no bespoke-classes plugin';
      }
    });

    deck.on("prev", function() {
      lastSlide = deck.slide();
    });

    deck.on("next", function(event) {
      var slide = event.slide;
      var code = slide.querySelector('code[data-bespoke-autorun]')
      var hasMoved = lastSlide !== deck.slide();

      lastSlide = deck.slide();

      if (code && hasMoved) {
        deck.fire("runCurrentCode");

        return false;
      }

      return true;
    });
  };
};

},{}]},{},[1])
(1)
});