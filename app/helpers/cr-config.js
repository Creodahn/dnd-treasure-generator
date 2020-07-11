import classic from 'ember-classic-decorator';
import Helper from '@ember/component/helper';

@classic
export default class CrConfig extends Helper {
  init() {
    super.init(...arguments);

    this._data = {};
  }

  compute() {
    return this._data;
  }
}
