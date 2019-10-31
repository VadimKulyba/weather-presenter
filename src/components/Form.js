import React from "react";

import Country from "./form/Country";

import geoData from '../data/geo.json';

class Form extends React.Component {
    makeOptionItem = (name) => {
        return <option>{name}</option>;
    };

    render() {
        return (
            <div>
                <Country 
                    geoData={geoData}
                    getWeather={this.props.getWeather}
                    makeOptionItem={this.makeOptionItem}/>
            </div>
        );
    }
}

export default Form;