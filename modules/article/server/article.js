Meteor.publish('article', (slug) => Articles.find({ slug }, {
  fields: {
    title: 1, description: 1, body: 1, createdAt: 1, createdBy: 1, slug: 1, favorites: 1,
  },
}));

Meteor.publish('articleAuthor', (_id) => Meteor.users.find({ _id }, { fields: { profile: 1, username: 1 } }));

Meteor.publish('profileArticles', (filter) => {
  check(filter, {
    username: String,
    favorites: Boolean,
  });

  const user = Meteor.users.findOne({ username: filter.username }, { fields: { _id: 1 } });
  if (!user) return this.ready();

  return Articles.find({ [filter.favorites ? 'favorites' : 'createdBy']: user._id }, {
    fields: {
      title: 1, description: 1, body: 1, createdAt: 1, createdBy: 1, slug: 1, favorites: 1,
    },
  });
});
