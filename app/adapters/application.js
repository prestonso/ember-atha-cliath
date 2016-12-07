import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://dublin-drupal.dd:8083',
  namespace: 'api',

  pathForType(type) {
    let entityPath;
    switch(type) {
      case 'node--article':
        entityPath = 'node/article';
        break;
      case 'node--page':
        entityPath = 'node/page';
        break;
      case 'user--user':
        entityPath = 'user/user';
        break;
    }
    return entityPath;
  },

  buildURL() {
    return this._super(...arguments) + '?_format=api_json';
  }
});
