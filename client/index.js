Template.header.helpers({
  isCurrentUserProfile() {
    return FlowRouter.getParam('username') === Meteor.user().username;
  },
});

Template.home.onCreated(function () {
  this.feed = new ReactiveVar('global');

  this.autorun(() => {
    this.subscribe('articles', this.feed.get());
  });
});

Template.home.helpers({
  articles() { return Articles.find({}); },
  isFeedTag() { return ['global', 'mine'].every((feed) => feed !== Template.instance().feed.get()); },
});

Template.home.events({
  'click .js-home-feed'(event, instance) {
    event.preventDefault();

    instance.feed.set(event.currentTarget.dataset.feed);
  },
});
