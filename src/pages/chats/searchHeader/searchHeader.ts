/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import template from './searchHeader.tmpl';
import './searchHeader.css';
import searchIcon from '../../../../public/magnifying-glass-solid.svg';
import Block from '../../../utils/Block';

class SearchHeader extends Block {
  render() {
    return this.compile(template, {
      menuIcon: this.props.menuIcon,
    });
  }
}

const SearchHeaderComponent = new SearchHeader('div', {
  menuIcon: searchIcon,
});

export default SearchHeaderComponent;

// export default () => {
//   const data = {
//     menuIcon: searchIcon,
//   };

//   const html = template(data);
//   return html;
// };
