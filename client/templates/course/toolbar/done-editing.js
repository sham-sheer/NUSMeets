Template.doneEditingEvent.events({
    'click #done-editing-event': function () {
        // Clear editing event ID session variable
        Session.set('editingEventId', undefined);
    },
});
