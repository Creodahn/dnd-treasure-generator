import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, typeIn } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ui/labeled-input', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders without a label if none is provided', async function(assert) {
    assert.expect(2);

    await render(hbs`{{ui/labeled-input update=(action (mut someValue))}}`);

    assert.dom('label').doesNotExist();
    assert.dom('input').exists();
  });

  test('it renders with a label if one is provided', async function(assert) {
    assert.expect(2);

    await render(hbs`{{ui/labeled-input label="A label" update=(action (mut someValue))}}`);

    assert.dom('label').hasText('A label');
    assert.dom('input').exists();
  });

  test('it defaults to a text input if no type is provided', async function(assert) {
    assert.expect(1);

    await render(hbs`{{ui/labeled-input update=(action (mut someValue))}}`);

    assert.dom('input').hasAttribute('type', 'text');
  });

  test('it triggers the provided action on key-up', async function(assert) {
    const expected = 'a';

    assert.expect(1);

    this.set('update', function(value) {
      assert.equal(value, expected);
    });

    await render(hbs`{{ui/labeled-input input-id="test" update=(action update)}}`);
    await typeIn('[data-test-labeled-input-field="test"]', expected);
  });
});
