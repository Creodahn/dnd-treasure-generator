import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | currency-format', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function(assert) {
    this.set('coinType', 'GP');
    this.set('inputValue', '1234');

    await render(hbs`{{currency-format inputValue coinType}}`);

    assert.equal(this.element.textContent.trim(), '1234 GP');
  });
});
