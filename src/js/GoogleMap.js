/* eslint-disable no-undef */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class GoogleMap extends Component {
  static propTypes = {
    properties: PropTypes.array.isRequired,
    activeProperty: PropTypes.object.isRequired,
    setActiveProperty: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
    this.state = {
      markers: [],
    };
  }

  componentDidMount() {
    const { properties, activeProperty } = this.props;
    const { latitude, longitude } = activeProperty;
    // The location of myCenter
    const myCenter = { lat: latitude, lng: longitude };
    // The map, centered at myCenter
    this.map = new google.maps.Map(this.mapRef.current, {
      zoom: 14,
      mapTypeControl: false,
      center: myCenter,
    });
    // The marker, positioned at myCenter
    // eslint-disable-next-line no-unused-vars
    this.createMarkers(properties);
  }

  createMarkers(properties) {
    const { setActiveProperty } = this.props;

    properties.map(property => {
      const { latitude, longitude, index } = property;
      this.marker = new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: this.map,
        label: {
          color: '#ffffff',
          text: `${index + 1}`,
        },
        icon: {
          url:
            'https://ihatetomatoes.net/react-tutorials/google-maps/images/img_map-marker.png',
          // This marker is 22 pixels wide by 40 pixels high.
          size: new google.maps.Size(22, 55),
          // The origin for this image is (0, 0).
          origin: new google.maps.Point(0, -15),
          // The anchor for this image is the base of the cross (11, 52).
          anchor: new google.maps.Point(11, 52),
        },
      });

      this.marker.addListener('click', function() {
        // set active property onto the state
        setActiveProperty(property);
      });

      return property;
    });
  }

  render() {
    return (
      <div className="mapContainer">
        <div id="map" ref={this.mapRef} />
      </div>
    );
  }
}
