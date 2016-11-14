import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://dublin-drupal.dd:8083',
  namespace: 'api',
  pathForType: function (type) {
    let entityType;
    switch (type) {
      case 'user--user':
        entityType = 'user/user';
        break;

      case 'node--page':
        entityType = 'node/page';
        break;

      default:
        entityType = 'node/article';
    }
    return entityType + '?_format=api_json';
  }
});
