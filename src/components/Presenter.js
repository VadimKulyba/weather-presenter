import React from "react";

class Presenter extends React.Component {
    render() {
        return (
            <div>
                {  }
                <p>Temperature: { this.props.temperature }</p>
                <p>Min temperature: { this.props.minTemperature }</p>
                <p>Max temperature: { this.props.maxTemperature }</p>
            </div>
        );
    }
}

export default Presenter;