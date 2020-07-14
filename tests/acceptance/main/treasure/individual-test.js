import { module, test } from 'qunit';
import { click, currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | main/treasure/individual', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /treasure/individual', async function(assert) {
    assert.expect(4);

    await visit('/');

    assert.equal(currentURL(), '/');

    await click('[data-test-app-nav-link="treasure"]');

    assert.equal(currentURL(), '/treasure/individual');
    assert.dom('h1').hasText('Calculate Individual Treasure');
    assert.dom('[data-test-cr-trigger]').exists();
  });
});
