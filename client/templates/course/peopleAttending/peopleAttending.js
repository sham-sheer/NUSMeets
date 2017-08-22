Template.peopleAttending.helpers({
  'likedUsers' : function() {
    var a = new Array();
    var count = 0;
    Likes.find({'eventId':this._id}).forEach(function(x){

      a[count] = x.user;
      count++;
    }
  );
  return(a);
  }

});



Template.peopleAttending.onCreated(function(){

  // Get reference to template instance
  var instance = this;


  instance.autorun(function() {
    // Subscribe to event images
    instance.subscribe('singleEventLikes', instance.title);
    instance.subscribe('likes');
    instance.subscribe('users', Meteor.user().username);
  });

});
