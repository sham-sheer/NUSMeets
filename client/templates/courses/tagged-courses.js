Template.taggedEvents.onCreated(function(){

  // Get reference to template instance
  var instance = this;

  instance.autorun(function() {

    // Accessing the Iron.controller to invoke getParams method of Iron Router.
    var router = Router.current();

    // Getting Params of the URL
    instance.tag = router.params.tag;

    // Subscribe to events tagged with the current tag
    instance.subscribe('taggedEvents', instance.tag);

    // Subscribe to event images
    instance.subscribe('images');
  });
});


Template.taggedEvents.rendered = function () {
  // Get reference to template instance
  var instance = this;

  // Set the page site title for SEO
  Meta.setTitle('Events tagged "' + instance.tag + '"');
};

Template.taggedEvents.helpers({
  'events': function () {
    // Get reference to template instance
    var instance = Template.instance();
    if (instance.subscriptionsReady()) {
      // Get tag from template instance
      var tag = instance.tag;

      // Fetch events matching current tag
      var taggedEvents = Events.find({"keywords": tag}).fetch();

      return taggedEvents;
    }
  },
  'tag': function () {
    // Get reference to template instance
    var instance = Template.instance();

    if (instance.subscriptionsReady()) {
       // Get tag from instance
       var tag = instance.tag;

       return tag;
    }

  }
});
