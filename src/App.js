import React from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import SignUp from './pages/signup';
import Payments from './components/Payments/Payments';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signup' component={SignUp} exact />
        <Route path='/payments' component={Payments} exact />
      </Switch>
    </Router>
    
  )
}

export default App
