import template from './text.tmpl';
import './text.css';
import Block from '../../utils/Block';
import '../../colors.css';

export default class Text extends Block {
  render() {
    return this.compile(template, { currentValue: this.props.currentValue, fieldName: this.props.fieldName });
  }
}