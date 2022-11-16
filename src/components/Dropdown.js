import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DropdownList from './DropdownList';

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(items[0]);

  const handleButtonClick = () => {
    setIsOpen((prevValue) => !prevValue);
  };

  const className = isOpen
    ? 'container dropdown-wrapper open'
    : 'container dropdown-wrapper';

  return (
    <div className={className}>
      <button className="btn" onClick={handleButtonClick}>
        Account settings <span className="material-icons">public</span>
      </button>
      <DropdownList items={items} selected={selected} onSelect={setSelected} />
    </div>
  );
};

Dropdown.propTypes = propTypes;

export default Dropdown;
