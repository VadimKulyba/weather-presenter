import React from 'react';

class City extends React.Component {
  constructor(props) {
    super(props);
    this.citySelectRef = React.createRef();
  }

  componentWillUpdate() {
    const { activeCity } = this.props;
    if (typeof activeCity && activeCity !== '') {
      this.citySelectRef.current[0].removeAttribute('selected');
    } else if (activeCity === '') {
      this.citySelectRef.current[0].setAttribute('selected', true);
    }
  }

  render() {
    const {
      hander,
      cytiesList,
    } = this.props;
    return (
      <select
        id="city-selector"
        ref={this.citySelectRef}
        onChange={hander}
      >
        {cytiesList}
      </select>
    );
  }
}

export default City;
