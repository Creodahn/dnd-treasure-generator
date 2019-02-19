import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | main/treasure/hoard/cr', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:main/treasure/hoard/cr');
    assert.ok(route);
  });
});
