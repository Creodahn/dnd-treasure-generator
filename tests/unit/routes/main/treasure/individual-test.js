import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | main/treasure/individual', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:main/treasure/individual');

    assert.ok(route);
  });
});
