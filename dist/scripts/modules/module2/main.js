
define('text!scripts/modules/module2/templates/index.tmpl',[],function () { return '<p>Hello, I am module 2!  I too was lazy loaded!  Have a wonderful day!</p>\n';});

define('scripts/modules/module2/main',[

  'backbone',
  'text!./templates/index.tmpl'

], function (

  Backbone,
  indexTemplate

) {
  

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

