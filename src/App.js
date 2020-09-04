import React from 'react';
import './App.css';
import LoginByGoogle from './LoginByGoogle';
import Dashboard from './Dashboard';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={(props) => {
            if (window.sessionStorage.isSignedIn) {
                return (<Component {...props} />);
            }
            else {
                return (<Redirect to={{
                    pathname: '/',
                    state: {
                        from: props.location
                    }
                }} />);
            }
        }} />
    );
};

function App() {
    return (
        <Router>
            <div className="App bg-dark container-fluid" style={{ 'height': '100vh', 'width': '100vw' }}>
                <nav className="nav navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="navbar-nav">
                        <Link to='/' className="navbar-brand">Home</Link>
                        <Link to='/dashboard' className="nav-item nav-link">Dashboard</Link>
                    </div>
                </nav>
                    <Switch>
                    <Route exact path='/' component={LoginByGoogle} />
                    <PrivateRoute path='/dashboard' component={Dashboard} />
                    </Switch>
            </div>
        </Router>
    );
}

export default App;
