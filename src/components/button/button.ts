import template from './button.tmpl.ts';
import './button.css';
import Block from '../../utils/Block';

export default class Button extends Block {
  render() {
    return this.compile(template, { buttonText: this.props.buttonText });
  }
}
