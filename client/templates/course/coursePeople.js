Template.eventPeople.created = function () {
  // Get reference to template instance
  var instance = this;

  // Get reference to router
  var router = Router.current();

  // Get event ID from router
  instance.eventId = router.params._id;

  // Subscribe to single event
  instance.subscribe('singleEvent', instance.eventId);

  // Set the empty active lesson ID variable
  activeLessonID = new ReactiveVar(undefined);
};

Template.eventPeople.helpers({
  'event': function () {
    // Get reference to Template instance
    var instance = Template.instance();

    // Get current event
    var event = new ReactiveVar();
    event = Events.findOne(instance.eventId);

    return event;
  }
});
