import { module, test } from 'qunit';
import { click, currentURL, visit } from '@ember/test-helpers';
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
});
