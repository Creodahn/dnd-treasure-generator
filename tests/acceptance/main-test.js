import { visit, currentURL } from '@ember/test-helpers';
import defaultScenario from 'dnd-treasure-generator/mirage/scenarios/default';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | main', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting main route', async function(assert) {
    this.server.logging = true;
    await defaultScenario(this.server);

    await visit('/');

    assert.equal(currentURL(), '/');
  });
});
