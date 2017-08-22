EventsController = AppController.extend({
    waitOn: function() {
        return [
            this.subscribe('publishedEvents'),
            this.subscribe('images')
            // TODO: Consider how to refine the images subscription to return only relevant images
        ];
    },
    data: function () {
        return Resources.find();
    }
});
