import React from 'react';

import Form from './components/Form';
import Titles from './components/Titles';
import Presenter from './components/Presenter';

const API_KEY = 'd2ee401549c61995396bb55b409103a3';
const API_URL = 'http://api.openweathermap.org/data/2.5/weather';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: undefined,
      country: undefined,
      temperature: undefined,
      minTemperature: undefined,
      maxTemperature: undefined,
      error: undefined,
    };
  }

  getWeather = async (country, city) => {
    const resp = await fetch(`${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const responseData = await resp.json();

    if (city) {
      this.setState({
        city: responseData.name,
        country: responseData.sys.country,
        temperature: responseData.main.temp,
        minTemperature: responseData.main.temp_min,
        maxTemperature: responseData.main.temp_max,
        error: '',
      });
    } else {
      this.setState({
        city: undefined,
        country: undefined,
        temperature: undefined,
        minTemperature: undefined,
        maxTemperature: undefined,
        error: 'Please enter city and country values',
      });
    }
  }

  render() {
    const {
      city,
      country,
      temperature,
      minTemperature,
      maxTemperature,
      error,
    } = this.state;
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Presenter
          city={city}
          country={country}
          temperature={temperature}
          minTemperature={minTemperature}
          maxTemperature={maxTemperature}
          error={error}
        />
      </div>
    );
  }
}

export default App;
