import getCrRule from 'dnd-treasure-generator/utils/get-cr-rule';
import { module, test } from 'qunit';

module('Unit | Utility | get-cr-rule', function() {

  // Replace this with your real tests.
  test('it returns null if no records are provided', function(assert) {
    const result = getCrRule([], 5);

    assert.notOk(result);
  });
});
