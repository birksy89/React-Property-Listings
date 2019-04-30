import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class GoogleMap extends Component {
  static propTypes = {
    properties: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
    this.state = {
      markers: [],
    };
  }

  componentDidMount() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    // eslint-disable-next-line no-undef
    const map = new google.maps.Map(this.mapRef.current, {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    // eslint-disable-next-line no-undef
    const marker = new google.maps.Marker({ position: uluru, map });
  }

  render() {
    return (
      <div className="mapContainer">
        <div id="map" ref={this.mapRef} />
      </div>
    );
  }
}
