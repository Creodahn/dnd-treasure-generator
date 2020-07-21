import classic from 'ember-classic-decorator';
import Route from '@ember/routing/route';

@classic
export default class TreasureRoute extends Route {
  beforeModel(transition) {
    const retransitionTargets = ['main.treasure', 'main.treasure.index'];

    if(retransitionTargets.indexOf(transition.targetName) > -1) {
      this.transitionTo('main.treasure.individual');
    }
  }
}
