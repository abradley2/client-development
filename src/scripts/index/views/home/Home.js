var template = require('./home.tpl');

module.exports = Backbone.View.extend({

  template: template,

  initialize: function(){

  },

  render: function(){
    var html = this.template({
      'message': 'hello world!'
    });

    this.$el.html(html);
  },

  remove: function(){
    this.$el.empty();
  }

});
