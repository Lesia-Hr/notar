import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import CalculatorPage from './pages/Calculator';
import CalculatorSecond from './pages/CalculatorSecond';
import DropDownMenu from './components/DropDownMenu/DropDownMenu';
import logo from './images/logo.png'

import './App.css';
import Login from './pages/Login';
import Config from './pages/Config';

import { isAuthorized } from './helpers/login';

function App() {
  return (
    <div className="app-notar">
      <Router>
        <header>
          <nav> 
            <ul>
              <img className="logo" src={logo} alt="logo"></img>
              <li>
                <Link to="/">Головна</Link>
              </li>
              <li>
                <Link to="/about">Контакти</Link>
              </li>
              <li>
                <a href="#">Структура</a>
                <DropDownMenu />
              </li>
              <li className="enter">
                <Link to="/login"><div className="enter-door"></div></Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/calc">
                <CalculatorPage />
                </Route>
              <Route path="/calcsecond">
                <CalculatorSecond/>
              </Route>

              <Route path="/config" render={(props) => (
                isAuthorized()
                  ? <Config />
                  : <Redirect to='/login' />
              )} />

              <Route path="/">
                <Home />
              </Route>
            </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
