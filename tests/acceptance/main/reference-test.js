import { module, test } from 'qunit';
import { click, currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | main/reference', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /main/reference', async function(assert) {
    assert.expect(2);

    await visit('/');

    assert.equal(currentURL(), '/');

    await click('[data-test-app-nav-link="reference"]');

    assert.equal(currentURL(), '/reference');
  });
});
