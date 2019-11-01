import React from 'react';

class Country extends React.Component {
    selectorGenerator = () => {
      const { geoData, makeOptionItem } = this.props;
      return Object.keys(geoData).map(makeOptionItem);
    }

    render() {
      const {
        hander,
        activeCountry,
      } = this.props;
      return (
        <select
          id="county-selector"
          onChange={hander}
          defaultValue={activeCountry}
        >
          {this.selectorGenerator()}
        </select>
      );
    }
}

export default Country;
