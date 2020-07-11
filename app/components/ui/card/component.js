import classic from 'ember-classic-decorator';
import { classNames } from '@ember-decorators/component';
import Component from '@ember/component';

@classic
@classNames('card')
export default class Card extends Component {}
