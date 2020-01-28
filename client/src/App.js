import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import MenuNav from '../src/components/Menu';

function App() {
  return (
    <Router>
      <MenuNav />
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </Router>
  );
}

export default App;
