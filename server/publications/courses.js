Meteor.publish('events', function () {
    return Events.find();
});

Meteor.publish('publishedEvents', function () {
    return Events.find({"published": "true"});
});

Meteor.publish('taggedEvents', function (tag) {
    return Events.find({"keywords": tag});
});

Meteor.publish('singleEvent', function (eventId) {
    return Events.find({"_id": eventId});
});
