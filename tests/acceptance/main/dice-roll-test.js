import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | main/dice roll', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /dice-roll', async function(assert) {
    await visit('/dice-roll');

    assert.equal(currentURL(), '/dice-roll');
  });
});
