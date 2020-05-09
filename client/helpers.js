Template.registerHelper('eq', (a, b) => a === b);
Template.registerHelper('instance', () => Template.instance());
Template.registerHelper('isRouteName', (name) => FlowRouter.getRouteName() === name);
Template.registerHelper('path', (pathDef, options) => FlowRouter.path(pathDef, options?.hash));
