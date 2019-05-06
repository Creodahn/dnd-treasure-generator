import Application from '@ember/application';

import { initialize } from 'dnd-treasure-generator/instance-initializers/dice-bag';
import { module, test } from 'qunit';
import Object from '@ember/object';
import { run } from '@ember/runloop';

module('Unit | Instance Initializer | dice-bag', function(hooks) {
  hooks.beforeEach(function() {
    this.TestApplication = Application.extend();
    this.TestApplication.instanceInitializer({
      name: 'initializer under test',
      initialize
    });
    this.application = this.TestApplication.create({ autoboot: false });
    this.instance = this.application.buildInstance();
    this.instance.register('service:dice-bag', Object.extend({ load() { return true; } }));
    this.instance.register('service:store', Object.extend({ findAll() { return []; } }));
  });
  hooks.afterEach(function() {
    run(this.application, 'destroy');
    run(this.instance, 'destroy');
  });

  // Replace this with your real tests.
  test('it works', async function(assert) {
    await this.instance.boot();

    assert.ok(true);
  });
});
