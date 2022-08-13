import template from './text.tmpl';
import './text.css';
import Block from '../../utils/Block';
import '../../colors.css';

interface IText {
  currentValue: string;
  fieldName: string;
}

export default class Text extends Block {
  constructor(props: IText) {
    super('div', props);
  }

  render() {
    return this.compile(template, { currentValue: this.props.currentValue, fieldName: this.props.fieldName });
  }
}
