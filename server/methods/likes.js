Meteor.methods({
  'getLikesCount' : function () {
    return Events.find().count();
  }
});
