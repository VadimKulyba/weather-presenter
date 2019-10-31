import React from "react";

class City extends React.Component {
    constructor(props) {
        super(props);
        this.cityRef = React.createRef();
        this.state = {
            defaultCity: "",
            activeCity: "",
            error: undefined,
        };
    }

    changeCityHandler = (event) => {
        this.setState({
            activeCity: event.target.value
        });
        this.props.getWeather(this.props.activeCountry, event.target.value);
    }

    selectorGenerator = () => {
        const citiesList = this.props.geoData[this.props.activeCountry];
        let result = [
            this.props.makeOptionItem(this.state.defaultCity) , 
            ...citiesList.map(this.props.makeOptionItem)]
        return result;
    }

    render() {
        return (
            <select id="city-selector"
                ref={this.cityRef}
                onChange={this.changeCityHandler}>
                {this.selectorGenerator()}
            </select>
        );
    }
}

export default City;