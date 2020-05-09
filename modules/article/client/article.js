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
  author() { return Meteor.users.findOne(this.createdBy); },
  dateFormat(date) {
    const options = {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    };
    return date?.toLocaleDateString(undefined, options);
  },
  isFavorited() { return this.favorites?.includes(Meteor.userId()); },
});


Template.articleMeta.events({
  'click .js-article-favorite'() {
    const userId = Meteor.userId();
    const isFavorited = this.favorites?.includes(userId);
    Articles.update(this._id, { [isFavorited ? '$pull' : '$addToSet']: { favorites: userId } });
  },
});
