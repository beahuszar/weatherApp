import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

// Class based component
class App extends React.Component {
    // This is identical to the constructor, Babel will translate it to that
    state = { lat: null , errorMessage: '' };

    componentDidMount(){
        /* 
            it needs 2 arguments to be able to return the users location:
            - success callback, which gets called when all OK
            - failure callback, when the location cannot be tracked
        */
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    // Render method is a must for React to be able to return the jsx
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage} </div>;
        }
        
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <Spinner text="Fetching geolocation..."/>
    };
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);