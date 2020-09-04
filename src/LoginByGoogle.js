import React, {useState} from 'react';
import { GoogleLogin } from 'react-google-login';

const LoginByGoogle = (props) => {
    let [signInBanner, setSignBanner] = useState('Please Sign In');

    const responseGoogle = (response) => {
        if (response.isSignedIn) {
            setSignBanner(`Welcome ${response.profileObj.givenName}!`);
        }
        window.sessionStorage.setItem('isSignedIn', response);
        window.sessionStorage.setItem('userData', JSON.stringify(response.profileObj));
        props.history.push('/dashboard');
    };

    return (
        <div className="row">
            <div className="col-md-3" />
            <div className="col-md-6 h-100 py-5">
                <div className="card text-center my-auto bg-light">
                    <div className="card-body">
                        <h1 className="card-title text-dark">{signInBanner}</h1>
                        <hr style={{ 'backgroundColor': '#343A40'}} />
                        <span>
                            <GoogleLogin
                                clientId="730712262782-d2m3u2mn76s2fasgsniv1d45723a9qli.apps.googleusercontent.com"
                                buttonText="Login with Google"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                                isSignedIn={true}
                                theme="dark"
                            />
                            {/* uxMode="redirect" for redirect rather than popup */}
                        </span>
                    </div>
                </div>
            </div>
            <div className="col-md-3" />
        </div>
    );
};

export default LoginByGoogle;