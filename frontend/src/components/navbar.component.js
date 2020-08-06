import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.min.js';

export default class NavigationBar extends Component {
    render() {
        return (
          <nav className="navbar navbar-dark bg-dark navbar-expand-rg">
            <Link to="/" className="navbar-brand">Fitness Spotter</Link>
            <div className="expand navbar-expand">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item dropdown">
                <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Add Exercise
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to="/aerobic/add" className="dropdown-item">Aerobic</Link>
                  <div className="dropdown-divider"></div>
                  <Link to="/strength/add" className="dropdown-item">Strength</Link>
                  <div className="dropdown-divider"></div>
                  <Link to="/stretch/add" className="dropdown-item">Stretch</Link>
                  <div className="dropdown-divider"></div>
                  <Link to="/balance/add" className="dropdown-item">Balance</Link>
                </div>
              </li>
              <li className="navbar-item dropdown">
                <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  View Exercise
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to="/aerobic/" className="dropdown-item">Aerobic</Link>
                  <div className="dropdown-divider"></div>
                  <Link to="/strength/" className="dropdown-item">Strength</Link>
                  <div className="dropdown-divider"></div>
                  <Link to="/stretch/" className="dropdown-item">Stretch</Link>
                  <div className="dropdown-divider"></div>
                  <Link to="/balance/" className="dropdown-item">Balance</Link>
                </div>
              </li>
              <li className="navbar-item">
              <Link to="/create" className="nav-link">Add Exercise</Link>
              </li>
              
              
              {/*
              <li className="navbar-item">
              <Link to="/user" className="nav-link">Add User</Link>
              </li>
              */}
            </ul>
            </div>
          </nav>
        );
      }
}

