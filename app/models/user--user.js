import DS from 'ember-data';

export default DS.Model.extend({
  uid: DS.attr(),
  uuid: DS.attr(),
  name: DS.attr(),
  mail: DS.attr()
});
