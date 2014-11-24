// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
  },

  playFirst: function(){
    // console.log(this.length);
    // if (this.length <= 1) {
      this.at(0).play();
    // }
  }

  // add: function(newSong){
  //   this.model.push(newSong);
  // }

  // playSpy: function(){
  //   console.log(this.length);
  //   if (this.length === 1) {
  //     this.at(0).play();
  //   }
  // }

});