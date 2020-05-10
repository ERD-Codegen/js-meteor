Articles = new Meteor.Collection('articles');

Articles.helpers({
  isFavorited() { return this.favorites?.includes(Meteor.userId()); },
  author() { return Meteor.users.findOne(this.createdBy); },
  isAuthor() { return this.createdBy === Meteor.userId(); },

  favoriteToggle() {
    const userId = Meteor.userId();
    if (!userId) return;
    const isFavorited = this.favorites?.includes(userId);
    Articles.update(this._id, { [isFavorited ? '$pull' : '$addToSet']: { favorites: userId } });
  },
});

Meteor.users.helpers({
  isFavorited() { return this.favoritesOf?.inclues(Meteor.userId()) ?? false; },
});
