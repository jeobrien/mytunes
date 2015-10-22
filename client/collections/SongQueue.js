// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  // defaults: {
  //   collection: []
  // },
  initialize: function(song) {
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);
    this.on('remove', function() {
      this.playFirst();
    })


  },
  playFirst: function() {
    this.models[0].play();
  }

});

