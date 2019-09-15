import React from 'react';
const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'winter';
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

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = SeasonConfig[season]; //ES2015

    return (
        <div>
            <i className={`${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;