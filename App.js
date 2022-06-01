import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import Home from './component1/Home';
import About from './component2/About';
import Contact from './component3/Contact';

class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <h2>Welcome to Sqube Softsol Private Limited</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
          </ul>
          </nav>
          <hr />
          <Routes>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;