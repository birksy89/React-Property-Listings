/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import Filter from './Filter';
import image from '../images/house-location-pin.svg';

function Header({
  filterIsVisible,
  toggleFilter,
  handleFilterChange,
  clearFilter,
}) {
  return (
    <header className={`${filterIsVisible ? 'filter-is-visible' : ''}`}>
      <Filter
        toggleFilter={toggleFilter}
        handleFilterChange={handleFilterChange}
        clearFilter={clearFilter}
      />
      <img alt="" src={image} />
      <h1>Property Listings</h1>
      <button
        type="button"
        className="btn-filter"
        onClick={e => toggleFilter(e)}
      >
        Filter
      </button>
    </header>
  );
}

Header.propTypes = {
  filterIsVisible: PropTypes.bool.isRequired,
  toggleFilter: PropTypes.func.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
  clearFilter: PropTypes.func.isRequired,
};

export default Header;
