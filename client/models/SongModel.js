// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  defaults: {
    "title": "",
    "artist": "",
    "url": "",
    "songCount" : 0
  },
  initialize: function() {

  },
  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },
  enqueue: function() {
    this.trigger('enqueue', this);
  },
  dequeue: function() {
    //deque from any point in the queue
    this.trigger('dequeue', this);
  },
  // 
  ended: function() {
    //ended is for dequing the front
    this.set({songCount: this.get('songCount') + 1});
    console.log(this.get('songCount'));
    this.trigger('ended', this);
  }

});