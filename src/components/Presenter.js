import React from 'react';

const Presenter = ({
  city, country, temperature, minTemperature, maxTemperature,
}) => (
  <div>
    { city && country && (
    <p>
    Temperature:
      { temperature }
    </p>
    ) }
    { city && country && (
    <p>
    Min temperature:
      { minTemperature }
    </p>
    )}
    { city && country && (
    <p>
    Max temperature:
      { maxTemperature }
    </p>
    )}
  </div>
);

export default Presenter;
