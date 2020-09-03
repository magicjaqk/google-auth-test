import React, { useState, useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';


const Dashboard = () => {
    let [name, setName] = useState('');
    let [isSignedIn, setSignedIn] = useState(window.sessionStorage.isSignedIn ? true : false);

    const responseGoogle = (response) => {
        console.log(response.isSignedIn ? true : false);
        let signInStatus = response.isSignedIn ? true : false;
        window.sessionStorage.setItem('isSignedIn', signInStatus);
        window.sessionStorage.setItem('userData', JSON.stringify(response.profileObj));
    };

    const logoutGoogle = (response) => {
        console.log('Logout Success');
        setSignedIn(false);
        window.sessionStorage.setItem('isSignedIn', false);
    };
    
    useEffect(() => {
        let profileObj = window.sessionStorage.userData ? JSON.parse(window.sessionStorage.userData) : '';
        if (window.sessionStorage.userData) {
            setName(`${profileObj.givenName} ${profileObj.familyName}`);
        }
        setSignedIn(window.sessionStorage.isSignedIn);
    }, [isSignedIn]);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12 py-5">
                    <h2 className="bg-success text-light py-3 w-50 mx-auto" style={{'borderRadius': '15px'}}>Welcome to the Dashboard</h2>
                </div>
            </div>
            {isSignedIn &&
                <div className="row">
                    <div className="col-sm-2" />
                    <div className="col-sm-6">
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
            }
            {!isSignedIn &&
                <div className="row">
                    <div className="col-md-3" />
                    <div className="col-md-6 h-100 py-5">
                        <div className="card text-center my-auto bg-light">
                            <div className="card-body">
                                <h1 className="card-title text-dark">Please Sign In</h1>
                                <hr style={{ 'backgroundColor': '#343A40' }} />
                                <span className="mr-3">
                                    <GoogleLogin
                                        clientId="730712262782-d2m3u2mn76s2fasgsniv1d45723a9qli.apps.googleusercontent.com"
                                        buttonText="Login with Google"
                                        onSuccess={responseGoogle}
                                        onFailure={responseGoogle}
                                        cookiePolicy={'single_host_origin'}
                                        isSignedIn={false}
                                        theme="dark"
                                    />
                                    {/* uxMode="redirect" for redirect rather than popup */}
                                </span>
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
                    <div className="col-md-3" />
                </div>
            }
        </div>
    );
};

export default Dashboard;