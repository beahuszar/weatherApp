import './SeasonDisplay.css'; // Webpack will detect this and put the appropriate link tag in the html where it is needed
import React from 'react';

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonConfig = {
  summer: {
    text: 'Lets hit the beach',
    iconName: 'sun' // from semanticUI
  },
  winter: {
    text: 'Burr, it is chilly',
    iconName: 'snowflake' // from semanticUI
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = SeasonConfig[season]; //ES2015

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
