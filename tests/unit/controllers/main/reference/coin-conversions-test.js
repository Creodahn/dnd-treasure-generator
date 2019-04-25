import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | main/reference/coin-conversions', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:main/reference/coin-conversions');
    assert.ok(controller);
  });
});
