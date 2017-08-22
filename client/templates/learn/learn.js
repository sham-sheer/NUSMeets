Template.learn.helpers({
    'events': function(){
        return Events.find();
    }
});

Template.learn.created = function () {
  // Get reference to template instance
  var instance = this;

  // Subscribe to all published events
  instance.subscribe("publishedEvents");
  // Subscribe to all pulished images
  instance.subscribe('images');
};
