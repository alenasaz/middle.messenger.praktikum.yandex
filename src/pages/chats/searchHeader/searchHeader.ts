/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import template from './searchHeader.tmpl';
import './searchHeader.css';
import searchIcon from '../../../../public/magnifying-glass-solid.svg';
import Block from '../../../utils/Block';

interface ISearchHeader {
  menuIcon: unknown;
}
class SearchHeader extends Block {
  constructor(props: ISearchHeader) {
    super('div', props);
  }

  render() {
    return this.compile(template, {
      menuIcon: this.props.menuIcon,
    });
  }
}

const SearchHeaderComponent = new SearchHeader({
  menuIcon: searchIcon,
});

export default SearchHeaderComponent;
