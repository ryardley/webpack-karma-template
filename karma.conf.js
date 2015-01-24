module.exports = function(config) {
  config.set({

    files: [
      'spec/*_spec.js',
      'spec/**/*_spec.js'
    ],

    preprocessors: {
      'spec/*_spec.js': ['webpack'],
      'spec/**/*_spec.js': ['webpack']
    },
    autoWatch: true,
    browsers: ['PhantomJS'],
    frameworks: ["jasmine"],
    webpack: require('./webpack.config.js'),
    webpackMiddleware: {
      noInfo: true
    },
    plugins: [
      require('karma-webpack'),
      'karma-jasmine',
      'karma-phantomjs-launcher'
    ]

  });
};
