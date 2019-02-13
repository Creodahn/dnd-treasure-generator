import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | text-reward-format', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function(assert) {
    this.set('inputValue', 1234);
    this.set('text', 'thing')

    await render(hbs`{{text-reward-format inputValue text}}`);

    assert.equal(this.element.textContent.trim(), 'things');
  });
});
