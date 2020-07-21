import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | hoard-rewards', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<HoardRewards />`);

    assert.dom('[data-test-hoard-no-rewards-msg').hasText('No rolls yet');
  });
});
