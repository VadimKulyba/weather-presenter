import React from "react";

import City from "./City";

class Country extends React.Component {
    constructor(props) {
        super(props);
        const defaultCountry = "United Kingdom"
        this.state = {
            defaultCountry: defaultCountry,
            activeCountry: defaultCountry,
            error: undefined,
        };
    }

    selectorGenerator = () => {
        return Object.keys(this.props.geoData).map(this.props.makeOptionItem);
    }

    changeCountryHandler = (event) => {
        this.setState({
            activeCountry: event.target.value
        });
        this.props.getWeather(this.props.activeCountry, "");
    }

    render() {
        return (
            <div>
                <select id="county-selector"
                    onChange={this.changeCountryHandler}
                    defaultValue={this.state.defaultCountry}>
                    {this.selectorGenerator()}
                </select>
                <City
                    geoData={this.props.geoData}
                    activeCountry={this.state.activeCountry}
                    getWeather={this.props.getWeather}
                    makeOptionItem={this.props.makeOptionItem}/>
            </div>
        );
    }
}

export default Country;