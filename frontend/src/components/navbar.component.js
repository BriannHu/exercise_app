import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class NavigationBar extends Component {
    render() {
        return (
          <nav className="navbar navbar-dark bg-dark navbar-expand-rg">
            <Link to="/" className="navbar-brand">Fitness Spotter</Link>
            <div className="expand navbar-expand">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
              <Link to="/" className="nav-link">View Exercises</Link>
              </li>
              <li className="navbar-item">
              <Link to="/create" className="nav-link">Add Exercise</Link>
              </li>
              <li className="navbar-item">
              <Link to="/user" className="nav-link">Add User</Link>
              </li>
            </ul>
            </div>
          </nav>
        );
      }
}

