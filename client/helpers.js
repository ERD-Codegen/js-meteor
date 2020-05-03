Template.registerHelper('instance', () => Template.instance());
Template.registerHelper('isRouteName', (name) => FlowRouter.getRouteName() === name);
