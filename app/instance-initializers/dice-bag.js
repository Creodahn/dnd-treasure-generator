// make sure that the dice bag is loaded before anything else happens
export function initialize(appInstance) {
  const diceBag = appInstance.lookup('service:dice-bag'),
    store = appInstance.lookup('service:store');

  diceBag.load(store.findAll('die'));
}

export default {
  initialize
};
