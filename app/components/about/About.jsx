var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title"> About</h1>
            <p>Experience the weather. This is the weather app I built on React, Webpack, ES6 and other tools. </p>
            <p> The following are some of the tools that I git used for building this application</p>
            <ul>
                <li>
                    Javascript Library: <a href="https://facebook.github.io/react" target="_blank">React</a>
                </li>
                <li>
                    Weather Data: <a href="http://openweathermap.org" target="_blank">Open Weather Map</a>
                </li>
            </ul>
        </div>
    )};

module.exports = About;