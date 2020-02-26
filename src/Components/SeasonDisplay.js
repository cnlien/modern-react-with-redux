import React from 'react';

const seasonConfig = {
    summer: {
        text: "Let's Hit The Beach, it's Summer!",
        iconName: "sun"
    },
    winter: {
        text: "Burrr it is cold, it's winter!",
        iconName: "snowflake"

    }
};

const getSeason = (lat, month) => {
    if(month>2 && month<9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = (props) => {

    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season]

    return(
        <div>
            <h1><i className={`${iconName} icon`} /> {text}</h1>
            <h3><i className="location arrow icon" />Latitude: {props.lat}</h3>
            <h3><i className="location arrow icon" />Longitude: {props.long}</h3>
        </div>
    )
}

export default SeasonDisplay;
