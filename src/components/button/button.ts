import template from './button.tmpl';
import './button.css';
import Block from '../../utils/Block';
import '../../colors.css';

interface IButton {
  buttonText?: string;
}

export default class Button extends Block {
  constructor(props: IButton) {
    super('div', props);
  }

  render() {
    return this.compile(template, { buttonText: this.props.buttonText });
  }
}
