require.config({
  baseUrl: '/',
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: [
        'underscore',
        'jquery'
      ],
      exports: 'Backbone'
    }
  },
  paths: {
    jquery: '../bower_components/jquery/dist/jquery',
    backbone: '../bower_components/backbone/backbone',
    underscore: '../bower_components/underscore/underscore',
    text: '../bower_components/requirejs-text/text'
  }
});

require(['jquery'], function ($) {
  $('#load-module-1').on('click', function () {
    require(['scripts/modules/module1/main'], function (Module1) {
      new Module1({
        el: document.querySelector('.module-1')
      });
    });
  });
});
