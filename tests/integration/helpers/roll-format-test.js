import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | roll-format', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function(assert) {
    this.set('inputValue', [{ result: 1 }, { result: 2 }, { result: 3 }, { result: 4 }]);

    await render(hbs`{{roll-format inputValue}}`);

    assert.equal(this.element.textContent.trim(), '1 + 2 + 3 + 4');
  });
});
