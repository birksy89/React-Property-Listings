import React from 'react';
import jump from 'jump.js';
import Card from './Card';
import Header from './Header';
import GoogleMap from './GoogleMap';
import data from './data/Data';
import { easeInOutCubic } from './utils/Easing';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      properties: data.properties,
      activeProperty: data.properties[0],
      filterIsVisible: false,
      filterBedrooms: 'any',
    };

    this.setActiveProperty = this.setActiveProperty.bind(this);
  }

  setActiveProperty(property, scroll) {
    const { index } = property;

    this.setState({
      activeProperty: property,
    });

    if (scroll) {
      // scroll to the right property
      const target = `#card-${index}`;
      jump(target, {
        duration: 800,
        easing: easeInOutCubic,
      });
    }
  }

  toggleFilter = e => {
    const { filterIsVisible } = this.state;
    e.preventDefault();
    this.setState({
      filterIsVisible: !filterIsVisible,
    });
  };

  handleFilterChange = e => {
    const { value, name } = e.target;
    console.log(value, name);
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { properties, activeProperty, filterIsVisible } = this.state;
    return (
      <div>
        {/* listings - Start */}
        <div className="listings">
          {/* Header - Start - add .filter-is-visible to show filter */}
          <Header
            filterIsVisible={filterIsVisible}
            toggleFilter={this.toggleFilter}
            handleFilterChange={this.handleFilterChange}
          />
          {/* Header - End */}

          <div className="cards container">
            <div className="cards-list row ">
              {properties.map(property => (
                <Card
                  key={property._id}
                  property={property}
                  activeProperty={activeProperty}
                  setActiveProperty={this.setActiveProperty}
                />
              ))}
              )}
            </div>
          </div>
        </div>
        {/* listings - End */}

        <GoogleMap
          properties={properties}
          activeProperty={activeProperty}
          setActiveProperty={this.setActiveProperty}
        />
      </div>
    );
  }
}

export default App;
