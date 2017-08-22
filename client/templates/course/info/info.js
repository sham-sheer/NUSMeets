Template.eventInfo.helpers({
  'editingThisEvent': function (event, template) {
    // return true if user is editing this event
    return editingThisEventVar.get();
  }
});
