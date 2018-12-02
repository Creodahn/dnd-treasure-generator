import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
  model() {
    return hash({
      artObjects: this.store.findAll('art-object'),
      gemstones: this.store.findAll('gemstone'),
      treasureRules: this.store.query('treasure-rule', { treasureType: 'hoard' })
    });
  },
  setupController(controller, model) {
    this._super(controller, model.treasureRules);

    controller.set('artObjects', model.artObjects);
    controller.set('gemstones', model.gemstones);
  }
});
