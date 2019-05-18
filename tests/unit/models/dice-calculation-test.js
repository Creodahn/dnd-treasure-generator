import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | dice calculation', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    const store = this.owner.lookup('service:store'),
      model = store.createRecord('dice-calculation', {});

    assert.ok(model);
  });
});
