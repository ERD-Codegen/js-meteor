/**
- Home page (URL: /#/ )
    - List of tags
    - List of articles pulled from either Feed, Global, or by Tag
    - Pagination for list of articles
- Sign in/Sign up pages (URL: /#/login, /#/register )
    - Uses JWT (store the token in localStorage)
    - Authentication can be easily switched to session/cookie based
- Settings page (URL: /#/settings )
- Editor page to create/edit articles (URL: /#/editor, /#/editor/article-slug-here )
- Article page (URL: /#/article/article-slug-here )
    - Delete article button (only shown to article's author)
    - Render markdown from server client side
    - Comments section at bottom of page
    - Delete comment button (only shown to comment's author)
- Profile page (URL: /#/profile/:username, /#/profile/:username/favorites )
    - Show basic user info
    - List of articles populated from author's created articles or author's favorited articles
*/

FlowRouter.route('/', {
  name: 'home',
  action(/* params, queryParams */) {
    this.render('layout', { content: 'home' });
  },
});


FlowRouter.route('/my-feed', {
  name: 'myFeed',
  action(/* params, queryParams */) {
    this.render('layout', { content: 'home' });
  },
});

FlowRouter.route('/register', {
  name: 'register',
  action(/* params, queryParams */) {
    this.render('layout', { content: 'register' });
  },
});

FlowRouter.route('/login', {
  name: 'login',
  action(/* params, queryParams */) {
    this.render('layout', { content: 'login' });
  },
});

FlowRouter.route('/settings', {
  name: 'settings',
  action(/* params, queryParams */) {
    this.render('layout', { content: 'settings' });
  },
});

FlowRouter.route('/profile/:username', {
  name: 'profile',
  action(/* params, queryParams */) {
    this.render('layout', { content: 'profile' });
  },
});

FlowRouter.route('/profile/:username/favorites', {
  name: 'profileFavorites',
  action(/* params, queryParams */) {
    this.render('layout', { content: 'profile' });
  },
});

FlowRouter.route('/editor/:slug?', {
  name: 'editor',
  action(/* params, queryParams */) {
    this.render('layout', { content: 'editor' });
  },
});

FlowRouter.route('/article/:slug', {
  name: 'article',
  action() {
    this.render('layout', { content: 'article' });
  },
});
