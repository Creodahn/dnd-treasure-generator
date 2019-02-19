import EmberObject from '@ember/object';
import GetCrRuleMixin from 'dnd-treasure-generator/mixins/get-cr-rule';
import { module, test } from 'qunit';

module('Unit | Mixin | get-cr-rule', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let GetCrRuleObject = EmberObject.extend(GetCrRuleMixin);
    let subject = GetCrRuleObject.create();
    assert.ok(subject);
  });
});
