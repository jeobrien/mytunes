// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('add', function(song) {
      this.saveToStorage(song);
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function(song) {
      this.remove(song);
      this.saveToStorage(song);
    })
    this.on('ended', function(song) {
      this.shift();
      this.saveToStorage(song);
      console.log(song.attributes)
      if (this.length > 0) {
        this.playFirst();
      }
    }, this);

  },

  playFirst: function() {
    // console.log(this, this.at(0))
    this.models[0].play();
  },

  saveToStorage: function(song) {
    console.log("saved")

    var current = JSON.parse(localStorage.getItem("songQueue")) || [];
    
    localStorage.setItem("songQueue", JSON.stringify(current.concat(song.attributes.url)));
  }

});