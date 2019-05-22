import { click, visit, currentURL } from '@ember/test-helpers';
// import defaultScenario from 'dnd-treasure-generator/mirage/scenarios/default';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
// import { startMirage } from 'dnd-treasure-generator/initializers/ember-cli-mirage';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | main/treasure', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /treasure', async function(assert) {
    server.create('treasure-rule-set');
    server.logging = true;
    // await defaultScenario(server);

    // assert.expect(2);

    await visit('/');

    assert.equal(currentURL(), '/');

    await click('[data-test-nav-treasure-link]');

    // assert.equal(currentURL(), '/treasure');
  });
});
