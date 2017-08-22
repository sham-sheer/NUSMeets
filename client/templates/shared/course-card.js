Template.eventCard.helpers({
    'truncateKeywords': function (truncate, keywords) {
        /*
        Truncate keywords to a set limit
        Return an object with three attributes
            truncated keywords - array of keywords up to truncate limit
            remaining keywords - array of keywords excluded by truncate
            count of remaining keywords - numeric count of keywords excluded by truncate
        */
        var truncatedKeywordsObject = {
            'truncatedKeywords': keywords.slice(0, truncate),
            'remainingKeywords': keywords.slice(truncate),
            'remainingKeywordCount': keywords.length - truncate
        };

        return truncatedKeywordsObject;
    },
    'numLikes': function () {
      // Get reference to Template instance
      var event = this.title;
      var countLikes = Likes.find({"Event":event}).count();
      return countLikes;

    }

});

Template.eventCard.events({
    'click #addEvent': function(event, template){
        // prevent default button submit
        var currentUsername = Meteor.user().username;

        var event = this.title;

        var eventId = this._id;

        Likes.insert({
          "Event":event,
          "user":currentUsername,
          "eventId":eventId
        });
        // add code to be run when count is ready
        var count = Likes.find({"Event":event}).count();

        Session.set('countVariable', count);

        sAlert.success("You are going to " + event + " with " +  count +  " friends. Have a great time!");


    }
});

Template.eventCard.onCreated(function(){

  // Get reference to template instance
  var instance = this;


  instance.autorun(function() {
    // Subscribe to event images
    instance.subscribe('singleEventLikes', instance.title);
    instance.subscribe('likes');
    instance.subscribe('users', Meteor.user().username);
  });
});
