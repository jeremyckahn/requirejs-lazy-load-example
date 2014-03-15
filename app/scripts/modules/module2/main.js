define([

  'backbone',
  'text!./templates/index.tmpl'

], function (

  Backbone,
  indexTemplate

) {
  'use strict';

  var Module2 = Backbone.View.extend({
    initialize: function () {
      this.render();
    },

    render: function () {
      this.$el.html(indexTemplate);
    }
  });

  return Module2;
});
