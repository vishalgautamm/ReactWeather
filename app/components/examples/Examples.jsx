var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
    return (
        <div className="examples">
            <h1 className="text-center page-title">Examples</h1>
            <p> Here are few example locations to try out!</p>
            <ul>
                <li>
                    <Link to='/?location=Toronto'> Toronto, Ontario</Link>
                </li>
                <li>
                    <Link to="/?location=Paris">Paris</Link>
                </li>
            </ul>
        </div>
    )};

module.exports = Examples;