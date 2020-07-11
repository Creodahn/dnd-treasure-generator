import Helper from '@ember/component/helper';

export default Helper.extend({
  init() {
    this._super(...arguments);

    this._data = {};
  },

  compute() {
    return this._data;
  }
});
