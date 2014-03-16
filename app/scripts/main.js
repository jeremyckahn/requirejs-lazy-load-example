require.config({
  baseUrl: './',
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
    jquery: 'app/bower_components/jquery/dist/jquery',
    backbone: 'app/bower_components/backbone/backbone',
    underscore: 'app/bower_components/underscore/underscore',
    text: 'app/bower_components/requirejs-text/text'
  }
});

require([

  'jquery',

  // List Backbone as a dependency here so that it is included at build time.
  // The lazy-loaded modules will use it.
  'backbone'

], function (

  $

) {
  'use strict';

  $('#load-module-1').on('click', function () {
    require(['app/scripts/modules/module1/main'], function (Module1) {
      new Module1({
        el: document.querySelector('.module-1')
      });
    });
  });

  $('#load-module-2').on('click', function () {
    require(['app/scripts/modules/module2/main'], function (Module2) {
      new Module2({
        el: document.querySelector('.module-2')
      });
    });
  });

});
