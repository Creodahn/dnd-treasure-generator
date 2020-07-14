import classic from 'ember-classic-decorator';
import { classNames } from '@ember-decorators/component';
import { computed } from '@ember/object';
import Component from '@ember/component';

@classic
@classNames('error-container')
export default class ErrorContainer extends Component {
  @computed('content')
  get hasText() {
    return (this.content || '').length > 0;
  }
}
