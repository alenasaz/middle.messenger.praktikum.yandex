// import Handlebars from 'handlebars';
import template from './input.tmpl.ts';
import './input.css';
import Block from '../../utils/Block';

export default class Input extends Block {
  render() {
    return this.compile(template, { name: this.props.name, placeholder: this.props.placeholder, type: this.props.type });
  }
}

// Handlebars.registerPartial('input', template);
