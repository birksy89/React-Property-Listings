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
    const { activeProperty } = this.props;

    const { latitude, longitude } = activeProperty;
    // The location of myCenter
    const myCenter = { lat: latitude, lng: longitude };
    // The map, centered at myCenter
    // eslint-disable-next-line no-undef
    const map = new google.maps.Map(this.mapRef.current, {
      zoom: 4,
      center: myCenter,
    });
    // The marker, positioned at myCenter
    // eslint-disable-next-line no-undef
    const marker = new google.maps.Marker({ position: myCenter, map });
  }

  render() {
    return (
      <div className="mapContainer">
        <div id="map" ref={this.mapRef} />
      </div>
    );
  }
}
