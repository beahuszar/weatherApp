import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    /* it needs 2 arguments to be able to return the users location:
     - success callback, which gets called when all OK
     - failure callback, when the location cannot be tracked
     */
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (err) => console.log(err)
    );
    return <div>
        Hi there!
    </div>
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);