Meteor.publish('article', (slug) => Articles.find({ slug }, {
  fields: {
    title: 1, description: 1, body: 1, createdAt: 1, createdBy: 1, slug: 1,
  },
}));

Meteor.publish('articleAuthor', (_id) => Meteor.users.find({ _id }, { fields: { profile: 1, username: 1 } }));
