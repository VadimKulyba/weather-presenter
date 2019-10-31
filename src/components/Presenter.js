import React from "react";

class Presenter extends React.Component {
    render() {
        return (
            <div>
                { this.props.city && this.props.country && <p>Temperature: { this.props.temperature }</p> }
                { this.props.city && this.props.country &&  <p>Min temperature: { this.props.minTemperature }</p>}
                { this.props.city && this.props.country && <p>Max temperature: { this.props.maxTemperature }</p>}
            </div>
        );
    }
}

export default Presenter;