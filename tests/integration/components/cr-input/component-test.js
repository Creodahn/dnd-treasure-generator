import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | cr-input', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('selectCR', function() {
      assert.ok(true);
    });

    await render(hbs`<CrInput @selectCR={{action this.selectCR}} />`);

    assert.dom('[data-test-cr-input]').exists();
    assert.dom('[data-test-cr-trigger]').exists();
  });
});
