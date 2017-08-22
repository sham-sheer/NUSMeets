EventController = AppController.extend({
    waitOn: function() {
        // event ID
        var eventID = this.params._id;

        // Event subscriptions
        return [
             // Wait for the event to be available
            this.subscribe("singleEvent", eventID),
        ];
    },
    data: function () {
        // Return the event
        return Events.findOne();
    },
    onAfterAction: function () {
        // Get the event ID from the URL parameters
        var eventID = this.params._id;

        // TODO: uncomment the following and figure out why it is generating a browser console error

        // Get the event from the database
        //var event  = Events.find(eventID).fetch()[0]; // select the zeroeth array item

        // Set the site title for SEO
        //Meta.setTitle(event.title);
    }
});
