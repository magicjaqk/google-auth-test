import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginByGoogle from './LoginByGoogle';
import Dashboard from './Dashboard';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App bg-dark" style={{ 'height': '100vh', 'width': '100vw' }}>
      <Router>
        <Switch>
          <Route exact path='/' component={LoginByGoogle} />
          <Route path='/dashboard' component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
