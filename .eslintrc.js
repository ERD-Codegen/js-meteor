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
  globals: {
    // Meteor
    // Picker: 'readonly',
    FlowRouter: 'readonly',
    BlazeLayout: 'readonly',
    // AutoForm: 'readonly',
    // LocalStore: 'readonly',
    // moment: 'readonly',
  },
};
