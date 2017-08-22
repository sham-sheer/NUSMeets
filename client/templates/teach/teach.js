Template.addEvents.events({
    'change #eventCoverImage': function (event, template) {
        // Get the first file selected by the user
        // TODO: only allow the users to select one file
        // TODO: make sure the file is an image of allowed format (png, jpeg, webp)
        var image = event.target.files[0];

        // Insert the image into the database
        // getting the image ID for use in the event object
        var imageObject = Images.insert(image);

        // The image id is stored in the image object
        var imageId = imageObject._id;

        // Create a reactive var to be used when the event is added
        imageIdVar = new ReactiveVar(imageId);
    },
    'click #addEvent': function(event, template){
        // prevent default button submit
        event.preventDefault();
        var currentUsername = Meteor.user().username;
        // create an empty event container
        var event = {
            // Get form field values
            title: template.find('#eventTitle').value, // string

            // Cover Image ID comes from reactive var set in #eventCoverImage change event
            coverImageId: imageIdVar.get(),

            author: template.find('#authorName').value, // string
            keywords: template.find('#eventKeywords').value.split(','), // split keywords to array
            published: template.find('#eventPublished').value, // string
            about: template.find('#aboutText').value // Get the about text
        };

        // Add event to collection
        var eventId = Events.insert(event);

        // Redirect to the event page
        Router.go( '/event/' + eventId );
    }
});

Template.addEvents.rendered = function() {
    // Get an array of the existing tags
    var tagOptions = Tags.find().fetch();

    $('#eventKeywords').selectize({
        delimiter: ',',
        persist: false,
        valueField: 'name',
        labelField: 'name',
        searchField: 'name',
        create: true,
        highlight: true,
        maxOptions: 5,
        options: tagOptions,
        onItemAdd: function (item) {
            // Check to see if tag exists in Tags collection
            // by querying the database for the tag name
            // and checking the length of the result
            var existingTag = Tags.find({"name": item}).fetch().length;
            if (!existingTag ) {
                // Add the tag to the Tags collection
                // TODO: figure out how to limit duplicate tags
                // e.g. 'Beans' and 'beans'
                // unless this is not an issue
                Tags.insert({"name": item});
            }
        }
    });
};
