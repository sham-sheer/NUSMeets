Events = new Mongo.Collection("events");

Events.helpers({
  'lessons': function () {
    // return all lessons related to event
    return Lessons.find({'eventIDs': this._id});
  },
  'coverImage': function() {
    // Get the cover image from Images collection
    return image = Images.findOne(this.coverImageId);
  },
  'likedUsers' : function() {
    return user = Likes.find({'eventId':this._id});
  }
});

// During the event creation add user id and a date stamp with dateCreated.
Events.before.insert(function (userId, document) {
  document.createdById = userId;
  document.dateCreated = new Date();
});
