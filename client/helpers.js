Template.registerHelper('instance', () => Template.instance());
Template.registerHelper('eq', (a, b) => a === b);

// FlowRouter
Template.registerHelper('isRouteName', (name) => FlowRouter.getRouteName() === name);
Template.registerHelper('path', (pathDef, options) => FlowRouter.path(pathDef, options?.hash));

// Array
Template.registerHelper('count', (arr) => arr?.length ?? 0);
Template.registerHelper('includes', (arr, include) => arr?.includes?.(include));
