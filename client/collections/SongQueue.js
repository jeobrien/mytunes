// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  // defaults: {
  //   collection: []
  // },
  initialize: function() {
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('remove', function() {
      this.playFirst();
    });

    this.on('ended', function(song) {
      this.shift(song);
    }, this);

  },




  playFirst: function() {
    console.log(this.library);
    this.models[0].play();
  }

});

