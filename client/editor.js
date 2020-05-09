import generateSlug from 'slug';

Template.editor.onCreated(function () {
  this.tags = new ReactiveVar([]);
  const errors = new ReactiveVar([]);

  this.errors = {
    list() { return errors.get(); },
    add(error) {
      const errorsList = errors.get();
      if (errorsList.includes(error)) return;

      errorsList.push(error);
      errors.set(errorsList);
    },
    remove(error) {
      const errorsList = errors.get();

      const index = errorsList.indexOf(error);
      if (index === -1) return;

      errorsList.splice(index, 1);
      errors.set(errorsList);
    },
    clear() { errors.set([]); },
  };
});

Template.editor.events({
  'change input[name=tag]'(event, instance) {
    event.preventDefault();

    const el = event.target;
    const tag = el.value;
    const tags = instance.tags.get();

    const tagError = 'Tags already added';
    if (tags.includes(tag)) { instance.errors.add(tagError); return; }
    instance.errors.remove(tagError);

    if (!tag) return;

    tags.push(tag);
    instance.tags.set(tags);
    el.value = '';
  },
  'click .js-tags-remove'(event, instance) {
    const tags = instance.tags.get();
    tags.splice(tags.indexOf(this), 1);
    instance.tags.set(tags);
  },
  'click button': function submitForm(event, instance) {
    event.preventDefault();

    const { form } = event.currentTarget;

    const title = form.title.value;
    const description = form.description.value;
    const body = form.body.value;
    const tags = instance.tags.get();

    instance.errors[title ? 'remove' : 'add']('Title is required');
    instance.errors[description ? 'remove' : 'add']('description is required');
    instance.errors[body ? 'remove' : 'add']('body is required');

    if (instance.errors.list().length) return;

    const slug = `${generateSlug(title)}-${Random.id(6).toLowerCase()}`;
    Articles.insert({
      title,
      description,
      body,
      slug,
      tags,
    });

    FlowRouter.go('article', { slug });
  },
});
