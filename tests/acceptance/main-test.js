import { visit, currentURL } from '@ember/test-helpers';
import defaultScenario from 'dnd-treasure-generator/mirage/scenarios/default';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | main', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting main route', async function(assert) {
    server.logging = true;
    await defaultScenario(server);

    await visit('/');

    assert.equal(currentURL(), '/');
  });
});
