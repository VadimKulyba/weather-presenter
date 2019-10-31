import React from "react";

class City extends React.Component {
    constructor(props) {
        super(props);
        this.citySelectRef = React.createRef();
    }

    componentWillUpdate() {
        if (this.props.activeCity === "") {
            this.citySelectRef.current[0].setAttribute('selected', '');
        }
    }

    render() {
        return (
            <select id="city-selector"
                ref={this.citySelectRef}
                onChange={this.props.hander}>
                {this.props.cytiesList}
            </select>
        );
    }
}

export default City;