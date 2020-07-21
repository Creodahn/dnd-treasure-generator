import JSONAPISerializer from '@ember-data/serializer/json-api';

export default JSONAPISerializer.extend({
  serializeAttribute: function(snapshot, json, key, attribute) {
    if(!attribute.options.readOnly) {
      this._super(snapshot, json, key, attribute);
    }
  },
  serializeBelongsTo: function(snapshot, json, relationship) {
    if(!relationship.options.readOnly) {
      this._super(snapshot, json, relationship);
    }
  },
  serializeHasMany: function(snapshot, json, relationship) {
    if(!relationship.options.readOnly) {
      this._super(snapshot, json, relationship);
    }
  }
});