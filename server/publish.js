Meteor.publish('profile', (username) => {
  check(username, String);
  return Meteor.users.find({ username });
});
