Template.lessonName.helpers({
  'editingThisEvent': function (event, template) {
    // Get reference to current router
    var router = Router.current();

    // Get Event ID from router
    var currentEventId = router.params._id;

    // Get value of editing event session variable
    var editingEventId = Session.get('editingEventId')

    // See if user is editing current event
    var editingCurrentEvent = (editingEventId === currentEventId);

    // return true if user is editing this event
    return editingCurrentEvent;
  }
});
