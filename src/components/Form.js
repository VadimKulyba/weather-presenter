import React from "react";

import City from "./form/City";
import Country from "./form/Country";

import geoData from '../data/geo.json';

function makeOptionItem(name) {
    return <option>{name}</option>;
}

function generateCitiesList(country) {
    const citiesList = geoData[country];
    return [makeOptionItem(""), ...citiesList.map(makeOptionItem)]
}

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeCountry: "United Kingdom",
            activeCity: "",
            cytiesList: generateCitiesList("United Kingdom"),
            error: undefined,
        };
    }

    changeCountryHandler = (event) => {
        this.setState({
            activeCountry: event.target.value,
            activeCity: "",
            cytiesList: generateCitiesList(event.target.value)
        });
        this.props.getWeather(event.target.value, "");
    }

    changeCityHandler = (event) => {
        this.setState({
            activeCity: event.target.value,
        });
        this.props.getWeather(this.state.activeCountry, event.target.value);
    }

    render() {
        return (
            <div>
                <Country
                    geoData={geoData}
                    activeCountry={this.state.activeCountry}
                    hander={this.changeCountryHandler}
                    makeOptionItem={makeOptionItem} />
                <City
                    activeCity={this.state.activeCity}
                    hander={this.changeCityHandler}
                    cytiesList={this.state.cytiesList} />
            </div>
        );
    }
}

export default Form;