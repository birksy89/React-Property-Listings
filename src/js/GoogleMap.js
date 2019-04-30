import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class GoogleMap extends Component {
  static propTypes = {
    properties: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      markers: [],
    };
  }

  render() {
    return (
      <div className="mapContainer">
        <div id="map" />
      </div>
    );
  }
}
