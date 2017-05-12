var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('./Components/Main');

var App = React.createClass({

    getInitialState: function() {
        return {
            lat: '',
            lng: ''
        };
    },
    getCoords: function(coords) {
        this.setState({
            lat: coords.latitude,
            lng: coords.longitude,
        });
    },

    render: function() {
        return (
            <div>
                <Main getCoords={this.getCoords} />
                <div>lat: {this.state.lat}, lng: {this.state.lng}</div>
            </div>
        );
    }
});

ReactDOM.render(<App />, document.getElementById('app'));
