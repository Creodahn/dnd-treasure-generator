import classic from 'ember-classic-decorator';
import Route from '@ember/routing/route';

@classic
export default class EventRoute extends Route {
  model(params) {
    return this.store.findRecord('dice-roll-event', params.id);
  }
}
