import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('main', { path: '/' }, function() {
    this.route('treasure', function() {
      this.route('individual', function() {
        this.route('cr', { path: '/:cr' });
      });
      this.route('hoard', function() {});
    });
    this.route('home');
    this.route('dice-roll');
    this.route('reference', function() {
      this.route('coin-conversions');
    });
  });
  this.route('login');
  this.route('signup');
  this.route('profile', function() {
    this.route('roll-history', function() {
      this.route('event', { path: '/:id' });
    });
  });
});
