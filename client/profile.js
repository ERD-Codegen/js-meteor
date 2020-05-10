Template.profile.onCreated(function profileOnCreated() {
  this.autorun(() => {
    FlowRouter.watchPathChange();
    this.subscribe('profile', FlowRouter.getParam('username'));
  });

  this.autorun(() => {
    FlowRouter.watchPathChange();
    this.subscribe('profileArticles', { username: FlowRouter.getParam('username'), favorites: FlowRouter.getRouteName() === 'profileFavorites' });
  });
});

Template.profile.helpers({
  user() {
    return Meteor.users.findOne({ username: FlowRouter.getParam('username') });
  },
  articles() {
    const user = Meteor.users.findOne({ username: FlowRouter.getParam('username') });
    if (!user) return [];

    return Articles.find({});
  },
});

Template.profile.events({
  'click .js-user-follow'() {
    const user = Meteor.users.findOne({ username: FlowRouter.getParam('username') });
    Meteor.call('userFollow', user._id);
  },
});
