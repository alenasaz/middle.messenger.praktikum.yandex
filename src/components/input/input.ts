import template from './input.tmpl';
import './input.css';
import Block from '../../utils/Block';
import '../../colors.css';

interface IInput {
  name: string;
  placeholder: string;
  type: string;
  events: { blur: (e: Event) => void };
  id: string;
}

export default class Input extends Block {
  constructor(props: IInput) {
    super('div', props);
  }

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
