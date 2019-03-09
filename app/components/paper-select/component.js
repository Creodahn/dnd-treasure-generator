import Component from '@ember/component';
import { computed }  from '@ember/object';
import Object from '@ember/object';

export default Component.extend({
  // attributes
  classNameBindings: ['comfortable'],
  classNames: ['form-group'],
  comfortable: false,
  // computed properties
  listItems: computed('blankOptionText', 'model.[]', 'showBlankOption', function() {
    const list = this.model.toArray();

    if(this.showBlankOption) {
      const name = this.blankOptionText ? this.blankOptionText : 'Select an Option';

      list.unshift(Object.create({ id:0, name }));
    }
 
    return list;
  })
});
