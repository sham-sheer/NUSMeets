Likes = new Mongo.Collection("likes");

Likes.before.insert(function (userId, document) {
  document.createdById = userId;
  document.dateCreated = new Date();
});
