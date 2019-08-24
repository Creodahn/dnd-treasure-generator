import { click, visit, currentURL } from '@ember/test-helpers';
import defaultScenario from 'dnd-treasure-generator/mirage/scenarios/default';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | main/treasure', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /treasure', async function(assert) {
    this.server.logging = true;
    await defaultScenario(this.server);

    assert.expect(2);

    await visit('/');

    assert.equal(currentURL(), '/');

    await click('[data-test-nav-treasure-link]');

    assert.equal(currentURL(), '/treasure');
  });
});
