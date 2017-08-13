Meteor.methods({
  'getLikesCount' : function () {
    return Courses.find().count();
  }
});
