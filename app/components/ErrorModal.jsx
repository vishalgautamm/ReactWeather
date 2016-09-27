var React = require('react');

var ErrorModal = React.createClass({
    getDefaultProps: function () {
      return {
          title: 'Error'
      };
    },
    propTypes: {
        title: React.PropTypes.string,
        message: React.PropTypes.string.isRequired
    },
    componentDidMount: function () {
        var modal = new Foundation.Reveal($('#error-Modal'));
        modal.open()
    },
    render: function () {
        var {title, message} = this.props;

        return (
            <div className="reveal tiny text-center" id="error-Modal" data-reveal="'">
                <h4> {title}</h4>
                <p> {message}</p>
                <p>
                    <button className="button hollow " data-close="">Okay</button>
                </p>
            </div>
        );
    }
});

module.exports = ErrorModal;