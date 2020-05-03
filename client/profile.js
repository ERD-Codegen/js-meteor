Template.profile.onCreated(function profileOnCreated() {
  this.autorun(() => {
    this.subscribe('profile', FlowRouter.getParam('username'));
  });
});

Template.profile.helpers({
  user() {
    return Meteor.users.findOne({ username: FlowRouter.getParam('username') });
  },
});
