import React from "react";

import Form from "./components/Form";
import Titles from "./components/Titles";
import Presenter from "./components/Presenter";

const API_KEY = "d2ee401549c61995396bb55b409103a3";
const API_URL = "http://api.openweathermap.org/data/2.5/weather"

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
    const response_data = await resp.json();

    if (city) {
      this.setState({
        city: response_data.name,
        country: response_data.sys.country,
        temperature: response_data.main.temp,
        minTemperature: response_data.main.temp_min,
        maxTemperature: response_data.main.temp_max,
        error: '',
      });
    } else {
      this.setState({
        city: undefined,
        country: undefined,
        temperature: undefined,
        minTemperature: undefined,
        maxTemperature: undefined,
        error: "Please enter city and country values",
      });
    }
  }

  render() {
    return (
      <div>
        <Titles/>
        <Form getWeather={this.getWeather}/>
        <Presenter
          city={this.state.city}
          country={this.state.country}
          temperature={this.state.temperature}
          minTemperature={this.state.minTemperature}
          maxTemperature={this.state.maxTemperature}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;