// import Handlebars from 'handlebars';
import template from './text.tmpl.ts';
import './text.css';
import Block from '../../utils/Block';

export default class Text extends Block {
  render() {
    return this.compile(template, { currentValue: this.props.currentValue, fieldName: this.props.fieldName });
  }
}

// Handlebars.registerPartial('text', template);
