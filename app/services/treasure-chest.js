import Service, { inject as service } from '@ember/service';

// retrieves and contains all the items that can be rolled for when calculating treasure rewards
export default Service.extend({
  store: service(),
  
  async _loadArt() {
    return this.artObjects ? this.artObjects : await this.store.findAll('art-object');
  },
  async _loadGems() {
    return this.gemstones ? this.gemstones : await this.store.findAll('gemstone');
  },
  async _loadMagicItems() {
    return this.magicItems ? this.magicItems : await this.store.findAll('magic-item', { include: 'children,die,parent' });
  },
  async load() {
    this.set('artObjects', await this._loadArt());
    this.set('gemstones', await this._loadGems());
    this.set('magicItems', await this._loadMagicItems());
  }
});
