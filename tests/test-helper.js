import Application from 'dnd-treasure-generator/app';
import config from 'dnd-treasure-generator/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
