import template from './searchHeader.hbs';
import './searchHeader.css';
import searchIcon from '../../../../publuc/magnifying-glass-solid.svg';

export default () => {
  const data = {
    menuIcon: searchIcon,
  };

  const html = template(data);
  return html;
};
