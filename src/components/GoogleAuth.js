import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '12177370171-vudno6hqp20jemau8jpv9322foqh3spo.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }
    render() {
        return <div>Google Auth</div>;
    }
}

export default GoogleAuth;