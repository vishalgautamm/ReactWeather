var React = require('react');

var GetWeatherForm = React.createClass({
    onFormSubmit: function (e) {

        e.preventDefault();  //Prevents entire page from reloading

        var location = this.refs.location.value;
        if (location.length > 0) {
            this.refs.location.value = '';
            this.props.onSearch(location);
        }
    },
    render: function() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="search" className="text-center" placeholder="Search weather by city" ref="location"/>
                    <button className="hollow expanded button">Get Weather</button>
                </form>
            </div>
        );
    }
});

module.exports = GetWeatherForm