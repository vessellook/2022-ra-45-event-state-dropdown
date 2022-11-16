import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string,
  onSelect: PropTypes.func,
};

const DropdownList = ({ items, selected, onSelect }) => {
  // по заданию нужно использовать inline-стили, а не классы
  // const className = (item) => {
  //   if (item === selected) {
  //     return 'active';
  //   }
  // };
  const style = (item) => {
    if (item === selected) {
      return {color: '#5380F7'}
    }
  }

  return (
    <ul className="dropdown">
      {items.map((item) => (
        <li key={item} style={style(item)}>
          <a href="#anchor" onClick={() => onSelect?.(item)}>
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};

DropdownList.propTypes = propTypes;

export default DropdownList;
