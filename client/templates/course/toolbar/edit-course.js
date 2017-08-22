Template.editEvent.events({
  'click #edit-event':function(event, template){
    // Get reference to Router
    var router = Router.current();

    // Get Event ID from router
    var eventId = router.params._id;

    // set editing event session variable to this event id
    Session.set('editingEventId', eventId);
  }
});
