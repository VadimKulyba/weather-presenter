import React from "react";

class City extends React.Component {
    constructor(props) {
        super(props);
        this.citySelectRef = React.createRef();
    }

    componentWillUpdate() {
        if (typeof this.props.activeCity && this.props.activeCity !== "") {
            this.citySelectRef.current[0].removeAttribute('selected');
        } else if (this.props.activeCity === "") {
            this.citySelectRef.current[0].setAttribute('selected', true);
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