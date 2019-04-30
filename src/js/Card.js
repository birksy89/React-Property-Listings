import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ property, activeProperty }) => {
  const {
    index,
    price,
    address,
    city,
    picture,
    bedrooms,
    bathrooms,
    carSpaces,
  } = property;

  return (
    <div
      id="card-0"
      className={`card col-sm-12 col-md-6 col-lg-4 ${
        activeProperty === property ? 'is-active' : ''
      } `}
    >
      <img src={picture} alt={city} />
      <p className="price">{price}</p>
      <div className="details">
        <span className="index">{index + 1}</span>
        <p className="location">
          {city}
          <br />
          {address}
        </p>
        <ul className="features">
          <li className="icon-bed">
            {bedrooms}
            <span>bedrooms</span>
          </li>
          <li className="icon-bath">
            {bathrooms}
            <span>bathrooms</span>
          </li>
          <li className="icon-car">
            {carSpaces}
            <span>parking spots</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

Card.propTypes = {
  property: PropTypes.object.isRequired,
  activeProperty: PropTypes.object.isRequired,
};

export default Card;
