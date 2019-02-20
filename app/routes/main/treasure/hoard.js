import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
  model() {
    return hash({
      artObjects: this.store.findAll('art-object'),
      gemstones: this.store.findAll('gemstone'),
      magicItems: this.store.findAll('magic-item', { include: 'children,die,parent' }),
      treasureRuleSets: this.store.query('treasure-rule-set', { filter: { treasure_type: 'hoard' }, include: 'dice-calculations' })
    });
  },
  setupController(controller, model) {
    this._super(controller, model.treasureRuleSets);

    controller.set('artObjects', model.artObjects);
    controller.set('gemstones', model.gemstones);
    controller.set('magicItems', model.magicItems);
  }
});
