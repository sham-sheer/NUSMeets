Meteor.publish('likes', function () {
    return Likes.find();
});
Meteor.publish('singleEventLikes', function(singleEvent) {
  return Likes.find({"Event": singleEvent});
});
Meteor.publish('users', function(user) {
  return Likes.find({"user":user});
});
