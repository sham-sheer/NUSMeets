Template.eventSidebarSection.helpers({
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
  },
  'section': function () {
    // Get the section ID from template data
    var sectionID = String(this);

    // Make sure template subscription is ready
    if (Template.instance().subscriptionsReady()) {
      // Get the section from database
      var section = Sections.findOne(sectionID);
;
      // Get the section from template level subscription
      return section;
    }
  }
});

Template.eventSidebarSection.onCreated(function () {
  // Call 'this' 'instance' for consistancy
  var instance = this;

  // Get section ID from instance data
  var sectionID = instance.data;

  // Subscribe to a single section (template level subscription)
  instance.subscribe('singleSection', sectionID);
});
