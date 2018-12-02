export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.4.x/shorthands/
  */

  this.namespace = 'api';

  this.resource('art-objects');
  this.resource('coins');
  this.resource('dice');
  this.resource('gemstones');
  this.resource('magic-items');
  this.get('/treasure-rules', function({ treasureRules }, request) {
    const results = this.serialize(treasureRules.all().models.findBy('treasure-type', request.queryParams.treasureType)),
      returnValue = Array.isArray(results.data) ? results : { data: [results.data] };

    return returnValue;
  });
}
