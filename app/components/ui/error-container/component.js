import { computed } from '@ember/object';
import Component from '@glimmer/component';

export default class ErrorContainer extends Component {
  @computed('content')
  get hasText() {
    return (this.content || '').length > 0;
  }
}
