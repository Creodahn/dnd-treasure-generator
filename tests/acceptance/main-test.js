import { visit, currentURL } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | main', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting main route', async function(assert) {
    server.logging = true;

    await visit('/');

    assert.equal(currentURL(), '/');
  });
});
