import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, typeIn } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ui/labeled-input', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders without a label if none is provided', async function(assert) {
    assert.expect(3);

    await render(hbs`<Ui::LabeledInput @input-id={{test-input}} @update={{action (mut someValue)}} />`);

    assert.dom('[data-test-labeled-input-label]').doesNotExist();
    assert.dom('[data-test-labeled-input-container]').exists();
    assert.dom('[data-test-labeled-input-field]').exists();
  });

  test('it renders with a label if one is provided', async function(assert) {
    assert.expect(2);

    await render(hbs`<Ui::LabeledInput @input-id={{test-input}} @label="A label" @update={{action (mut someValue)}} />`);

    assert.dom('[data-test-labeled-input-label]').hasText('A label');
    assert.dom('[data-test-labeled-input-field]').exists();
  });

  test('it defaults to a text input if no type is provided', async function(assert) {
    assert.expect(1);

    await render(hbs`<Ui::LabeledInput @input-id={{test-input}} @update={{action (mut someValue)}} />`);

    assert.dom('[data-test-labeled-input-field]').hasAttribute('type', 'text');
  });

  test('it triggers the provided action on key-up', async function(assert) {
    const expected = 'a';

    assert.expect(1);

    this.set('update', function(value) {
      assert.equal(value, expected);
    });

    await render(hbs`<Ui::LabeledInput @input-id="test-input" @update={{action update}} />`);
    await typeIn('[data-test-labeled-input-field]', expected);
  });
});
