// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td><td><%= songCount %>'),

  events: {
    'click': function() {
      this.model.play();
    },
    'change': function() {
      this.render();
    }
  },

  render: function() {
    // console.log(this.model.attributes, this.model);
    return this.$el.html(this.template(this.model.attributes));
  }
});