
define('text!scripts/modules/module1/templates/index.tmpl',[],function () { return '<p>Hello, I am module 1!  I was lazy loaded!  How delightful!</p>\n';});

define('scripts/modules/module1/main',[

  'backbone',
  'text!./templates/index.tmpl'

], function (

  Backbone,
  indexTemplate

) {
  

  var Module1 = Backbone.View.extend({
    initialize: function () {
      this.render();
    },

    render: function () {
      this.$el.html(indexTemplate);
    }
  });

  return Module1;
});

