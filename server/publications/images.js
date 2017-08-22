Meteor.publish('images', function () {
    return Images.find();
});

Meteor.publish('eventCoverImage', function (eventId) {
    // Get the event object from event ID parameter
    var eventObject = Events.findOne(eventId);

    // Get image ID from event object
    var coverImageId = eventObject.coverImageId;

    // Find the event cover image and return it
    return Images.find(coverImageId);
});
