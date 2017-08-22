EventInfoController = AppController.extend({
  waitOn: function() {
        // Wait for the event to be available
        return [
            this.subscribe('singleEvent', this.params._id),
            this.subscribe('eventCoverImage', this.params._id)
        ];
    },
    data: function () {
        // Return the event
        return Events.findOne();
    },
    onAfterAction: function () {
        //TODO: set meta event title without strange logged errors.
        // specifically, uncommenting the following code produces some
        // errors in console on page load.

        // This logs the id, after an initial error
        // the data must not be initially available
        //console.log(this.data()._id);

        //console.log(data);
        // Get the event ID from the URL parameters
        //var eventID = this.params._id;

        // Get the event from the database
        //var event  = Events.find(eventID).fetch()[0]; // select the zeroeth array item

        // Set the site title for SEO
        //Meta.setTitle(event.title);
    }
});
