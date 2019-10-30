import React from "react";

import Form from "./components/Form";
import Titles from "./components/Titles";
import Weather from "./components/Weather";

const WEATHER_API_KEY = "d2ee401549c61995396bb55b409103a3";

class App extends React.Component {
  getWeather = async (event) => {
    event.preventDefault();
    const api_request = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=
      Manchester,uk&appid=${WEATHER_API_KEY}&units=metric`);
    const response_data = await api_request.json();
    console.log(response_data);
  }

  render() {
    return (
      <div>
        <Titles/>
        <Form getWeather={this.getWeather}/>
        <Weather/>
      </div>
    );
  }
}

export default App;