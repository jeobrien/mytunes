// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({
  //params.library --> songs

  initialize: function(params) {
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());


    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the function (this.set('currentSong', song)) would
    end up referring to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */
    if (localStorage.getItem('songQueue')) {

      var urls = localStorage.getItem('songQueue');

      var models = _.map(urls, function(current) {
        console.log("here")
        return params.library.find(function(model) {
          return model.get("url") === current
        })

      console.log(models);
      this.get("songQueue").add(models);  

    })
  //   for (var i = 0; i < params.library.length; i++) {
  //     if (parsed.indexOf(params.library[i].url) !== -1) {
  //       this.get('songQueue').push(params.library[i]);
  //     }
  //   }
  }
    
    params.library.on('enqueue', function(song) {
      this.get("songQueue").push(song);
    }, this);
    params.library.on('play', function(song) {
      this.set('currentSong', song);
    }, this);
  }

});