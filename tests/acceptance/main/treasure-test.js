import { click, currentURL, findAll, visit } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | main/treasure', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /treasure', async function(assert) {
    assert.expect(3);

    await visit('/');

    assert.equal(currentURL(), '/');

    await click('[data-test-app-nav-link="treasure"]');

    // the main treasure route automatically redirects to the
    // individual subroute when targeting it or the index route
    assert.equal(currentURL(), '/treasure/individual');
    assert.equal(findAll('[data-test-app-subnav-link]').length, 2);
  });
});
