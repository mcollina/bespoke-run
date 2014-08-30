module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: ['jasmine', 'browserify'],

    files: [
      'spec/*Spec.js'
    ],

    exclude: [],

    preprocessors: {
      'spec/**/*.js': 'browserify'
    },

    reporters: ['progress', 'coverage'],

    coverageReporter: {
      type : 'lcov',
      dir : 'coverage'
    },

    port: 8080,

    logLevel: config.LOG_INFO,

    autoWatch: false,

    browsers: ['PhantomJS'],

    singleRun: true
  });
};
