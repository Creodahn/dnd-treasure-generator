import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | main/treasure/individual', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /treasure/individual', async function(assert) {
    await visit('/treasure/individual');

    assert.equal(currentURL(), '/treasure/individual');
    assert.dom('h1').hasText('Calculate Individual Treasure');
    assert.dom('[data-test-individual-cr-input]').exists();
  });
});
