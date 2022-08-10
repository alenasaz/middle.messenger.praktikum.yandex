import template from './button.tmpl';
import './button.css';
import Block from '../../utils/Block';
import '../../colors.css';

export default class Button extends Block {
  render() {
    return this.compile(template, { buttonText: this.props.buttonText });
  }
}
