import template from './input.tmpl';
import './input.css';
import Block from '../../utils/Block';
import '../../colors.css';

export default class Input extends Block {
  render() {
    return this.compile(template, {
      name: this.props.name,
      placeholder: this.props.placeholder,
      type: this.props.type,
      onblur: this.props.events,
      id: this.props.id,
    });
  }
}
