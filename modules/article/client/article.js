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
  article() { return Articles.findOne({ slug: FlowRouter.getParam('slug') }); },
  author() { return Meteor.users.findOne(this.createdBy); },
  dateFormat(date) {
    const options = {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    };
    return date?.toLocaleDateString(undefined, options);
  },
});
