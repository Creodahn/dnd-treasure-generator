import { click, visit, currentURL } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | main/treasure', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /treasure', async function(assert) {
    server.logging = true;

    assert.expect(2);

    await visit('/');

    assert.equal(currentURL(), '/');

    await click('[data-test-nav-treasure-link]');

    // the main treasure route automatically redirects to the
    // individual subroute when targeting it or the index route
    assert.equal(currentURL(), '/treasure/individual');
  });
});
