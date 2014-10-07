Meteor.loginWithLinkedin = Meteor.loginWithLinkedIn;

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get("counter");
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    }
  });
}

if (Meteor.isServer) {

  Meteor.startup(function () {
    // code to run on server at startup

    // first, remove configuration entry in case service is already configured
    ServiceConfiguration.configurations.remove({
      service: "linkedin"
    });
    ServiceConfiguration.configurations.insert({
      service: "linkedin",
      clientId: "YOUR LINKEDIN APP ID",
      secret: "YOUR LINKEDIN APP SECRET"
    });
  });
}
