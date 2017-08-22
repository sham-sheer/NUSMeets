Meteor.startup(function() {

  ServiceConfiguration.configurations.remove({
      service: "facebook"
  });

  ServiceConfiguration.configurations.insert({
      service: "facebook",
      appId: '1275624172547839',
      secret: 'ec349ce8c3079124e60518bc1ba0ed44'
  });
});
