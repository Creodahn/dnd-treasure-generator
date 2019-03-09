import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | main/npc-generator', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:main/npc-generator');
    assert.ok(route);
  });
});
