import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | main/dice-roll', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:main/dice-roll');
    assert.ok(route);
  });
});
