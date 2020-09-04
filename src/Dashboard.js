import React, { useState, useEffect } from 'react';
import { GoogleLogout } from 'react-google-login';


const Dashboard = (props) => {
    let [name, setName] = useState('');

    const logoutGoogle = (response) => {
        window.sessionStorage.removeItem('isSignedIn');
        props.history.push('/');
    };
    
    useEffect(() => {
        let profileObj = window.sessionStorage.userData ? JSON.parse(window.sessionStorage.userData) : '';
        if (window.sessionStorage.userData) {
            setName(`${profileObj.givenName} ${profileObj.familyName}`);
        }
    }, []);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12 py-5">
                    <h2 className="bg-success text-light py-3 w-50 mx-auto" style={{'borderRadius': '15px'}}>Welcome to the Dashboard</h2>
                    <h4 className="text-light">Welcome {name}!</h4>
                    <span>
                        <GoogleLogout
                            clientId="730712262782-d2m3u2mn76s2fasgsniv1d45723a9qli.apps.googleusercontent.com"
                            buttonText="Logout"
                            onLogoutSuccess={logoutGoogle}
                            onFailure={logoutGoogle}
                            theme="dark"
                        />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;