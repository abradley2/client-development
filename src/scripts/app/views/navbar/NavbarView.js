var template = require('./navbarTemplate.hbs');

module.exports = Backbone.View.extend({

  template: template,

  render: function(){
    this.$el.html( this.template() );
  },

  remove: function(){
    this.$el.empty();
  }

});
