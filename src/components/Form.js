import React from 'react';

import City from './form/City';
import Country from './form/Country';

import geoData from '../data/geo.json';

function makeOptionItem(name) {
  return <option>{name}</option>;
}

function generateCitiesList(country) {
  const citiesList = geoData[country];
  return [makeOptionItem(''), ...citiesList.map(makeOptionItem)];
}

const INIT_COUNTRY = 'United Kingdom';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCountry: INIT_COUNTRY,
      cytiesList: generateCitiesList(INIT_COUNTRY),
    };
  }

  changeCountryHandler = (event) => {
    const { getWeather } = this.props;
    this.setState({
      activeCountry: event.target.value,
      activeCity: '',
      cytiesList: generateCitiesList(event.target.value),
    });
    getWeather(event.target.value, '');
  }

  changeCityHandler = (event) => {
    const { activeCountry } = this.state;
    const { getWeather } = this.props;
    this.setState({
      activeCity: event.target.value,
    });
    getWeather(activeCountry, event.target.value);
  }

  render() {
    const {
      activeCountry,
      activeCity,
      cytiesList,
    } = this.state;
    return (
      <div>
        <Country
          activeCountry={activeCountry}
          geoData={geoData}
          hander={this.changeCountryHandler}
          makeOptionItem={makeOptionItem}
        />
        <City
          activeCity={activeCity}
          cytiesList={cytiesList}
          hander={this.changeCityHandler}
        />
      </div>
    );
  }
}

export default Form;
