import defaultScenario from 'dnd-treasure-generator/mirage/scenarios/default';
import { module, test } from 'qunit';
import { click, currentURL, typeIn, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | main/treasure/hoard', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /treasure/hoard', async function(assert) {
    assert.expect(3);

    await visit('/');

    assert.equal(currentURL(), '/');

    await click('[data-test-app-nav-link="treasure"]');

    assert.equal(currentURL(), '/treasure/individual');

    await click('[data-test-app-subnav-link="hoard-treasure"]');

    assert.equal(currentURL(), '/treasure/hoard');
  });

  // TODO: the cr routes no longer exist, so these tests need to be updated
  test('inputting a cr', async function(assert) {
    assert.expect(4);

    defaultScenario(server);

    await visit('/');

    assert.equal(currentURL(), '/');

    await click('[data-test-app-nav-link="treasure"]');

    assert.equal(currentURL(), '/treasure/individual');

    await click('[data-test-app-subnav-link="hoard-treasure"]');

    assert.equal(currentURL(), '/treasure/hoard');

    await typeIn('[data-test-labeled-input-field]', '12');
    await click('[data-test-cr-trigger]');

    // splitting the URL to get it without the query params for the
    // random number that enforces recalculating rules even if the
    // CR is the same
    assert.equal(currentURL().split('?')[0], '/treasure/hoard');
  });
});
