Template.header.helpers({
  isCurrentUserProfile() {
    return FlowRouter.getParam('username') === Meteor.user().username;
  },
});
