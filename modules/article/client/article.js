import marked from 'marked';

Template.article.onCreated(function () {
  this.autorun(() => {
    // watch path change to trigger autorun
    FlowRouter.watchPathChange();

    this.subscribe('article', FlowRouter.getParam('slug'));
  });
});


Template.article.helpers({
  article() { return Articles.findOne({ slug: FlowRouter.getParam('slug') }); },
  marked(body) { return marked(body); },
});

Template.articleMeta.onCreated(function () {
  this.autorun(() => {
    const article = Template.currentData();
    if (article) this.subscribe('articleAuthor', article.createdBy);
  });
});


Template.articleMeta.helpers({
  dateFormat(date) {
    return date?.toLocaleDateString(undefined, {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    });
  },
});


Template.articleMeta.events({
  'click .js-article-favorite'() {
    Articles.findOne(this._id).favoriteToggle();
  },
  'click .js-author-favorite'() {
    const author = Meteor.users.findOne(this.createdBy);
    Meteor.call('authorFavorite', this.createdBy, author.isFavorited());
  },
});
