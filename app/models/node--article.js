import DS from 'ember-data';

export default DS.Model.extend({
  nid: DS.attr(),
  uuid: DS.attr(),
  title: DS.attr(),
  created: DS.attr(),
  body: DS.attr()
});
