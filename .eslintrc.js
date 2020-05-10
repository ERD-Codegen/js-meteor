module.exports = {
  parser: 'babel-eslint',
  env: {
    meteor: true,
    browser: true,
    es2020: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'object-shorthand': 0,
    'func-names': 0,
    'no-underscore-dangle': 0,
  },
  globals: {
    // Meteor
    // Picker: 'readonly',
    FlowRouter: 'readonly',
    BlazeLayout: 'readonly',
    AccountsTemplates: 'readonly',
    // AutoForm: 'readonly',
    // LocalStore: 'readonly',
    // moment: 'readonly',

    // Meteor.Collection
    Articles: 'writable',
    Comments: 'writable',

    // App globals
    validates: 'writable',
  },
};
