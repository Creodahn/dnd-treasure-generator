import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | individual-rewards', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<IndividualRewards />`);

    assert.dom('[data-test-individual-no-rewards-msg]').hasText('No rolls yet');
  });
});
