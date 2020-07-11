import classic from 'ember-classic-decorator';
import { classNames, classNameBindings } from '@ember-decorators/component';
import Component from '@ember/component';

@classic
@classNameBindings('required')
@classNames('form-group')
export default class LabeledInput extends Component {
  type = 'text';
}
