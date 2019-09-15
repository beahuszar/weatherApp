import React from 'react';
import ReactDOM from 'react-dom';

// Class based component
class App extends React.Component {
    // Constructor is called 1st when a JS class is used
    // This is one good place where state can be initialised
    constructor(props) {
        // React.Component constructor
        super(props);
        
        // we don't yet know the value, but will later
        this.state = { lat: null , errorMessage: '' };

         /* it needs 2 arguments to be able to return the users location:
        - success callback, which gets called when all OK
        - failure callback, when the location cannot be tracked
        */
       window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude });
            },
            (err) => {
                this.setState({ errorMessage: err.message })
            }
        );
    };

    // Render method is a must for React to be able to return the jsx
    render() {     
        return <div>
            Latitude: {this.state.lat}
            <br />
            Error: {this.state.errorMessage} 
            </div>
    };
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);