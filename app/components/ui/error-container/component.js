import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['error-container'],

  hasText: computed('content', function() {
    return (this.content || '').length > 0;
  })
});
