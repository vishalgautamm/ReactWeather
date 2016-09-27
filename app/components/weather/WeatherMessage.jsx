var React = require('react');

var WeatherMessage = ({location, temp}) => {
    return (<h3 className="callout secondary text-center"> {temp}°F -{location} </h3>)};

module.exports = WeatherMessage;