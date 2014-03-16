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
    jquery: 'bower_components/jquery/dist/jquery',
    backbone: 'bower_components/backbone/backbone',
    underscore: 'bower_components/underscore/underscore',
    text: 'bower_components/requirejs-text/text',
    module1: 'scripts/modules/module1/main',
    module2: 'scripts/modules/module2/main'
  }
});

require([

  'jquery',

  // List these dependencies explicitly so that they are included at build
  // time.  The lazy-loaded modules will use them.
  'underscore',
  'backbone',
  'text'

], function (

  $

) {
  'use strict';

  $('#load-module-1').on('click', function () {
    require(['scripts/modules/module1/main'], function (Module1) {
      new Module1({
        el: document.querySelector('.module-1')
      });
    });
  });

  $('#load-module-2').on('click', function () {
    require(['scripts/modules/module2/main'], function (Module2) {
      new Module2({
        el: document.querySelector('.module-2')
      });
    });
  });

});
