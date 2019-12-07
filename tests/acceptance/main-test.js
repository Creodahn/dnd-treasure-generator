import { currentURL, findAll, visit } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | main', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting main route', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');

    // assertions for base page markup
    assert.dom('[data-test-app-nav]').exists();
    assert.dom('[data-test-app-nav-branding]').hasText('D&D Randomizer');
    assert.dom('[data-test-app-nav-collapsible-section]').exists();
    assert.dom('[data-test-app-nav-collapsible-toggle]').exists();
    assert.dom('[data-test-app-nav-link-list]').exists();
    assert.equal(findAll('[data-test-app-nav-link]').length, 3);
  });
});
