import React from "react";

class Country extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultCountry: this.props.activeCountry,
            error: undefined,
        };
    }

    selectorGenerator = () => {
        return Object.keys(this.props.geoData).map(this.props.makeOptionItem);
    }

    render() {
        return (
            <select id="county-selector"
                onChange={this.props.hander}
                defaultValue={this.state.defaultCountry}>
                {this.selectorGenerator()}
            </select>
        );
    }
}

export default Country;