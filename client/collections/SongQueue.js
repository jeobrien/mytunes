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
      localStorage.removeItem(JSON.stringify(song));
      if (this.at(0) === song) {
        this.remove(song);
        if (this.length === 0) {
          this.trigger('stop');
        } else {
          this.playFirst();
        }
      } else {
        this.remove(song);
      }

    }, this);

    this.on('ended', function(song) {
      this.shift();
      localStorage.removeItem(JSON.stringify(song));
      if (this.length > 0) {
        this.playFirst();
      }
    }, this);

  },
  playFirst: function() {
    this.models[0].play();
  },

  saveToStorage: function(song) { 
    localStorage.setItem(JSON.stringify(song), JSON.stringify(song));
  }

});