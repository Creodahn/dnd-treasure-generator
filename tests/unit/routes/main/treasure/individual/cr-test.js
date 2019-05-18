import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | main/treasure/individual/cr', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:main/treasure/individual/cr');

    assert.ok(route);
  });
});
