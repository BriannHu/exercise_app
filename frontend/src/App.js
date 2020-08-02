import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from './components/navbar'

function App() {
  return (
    <Router>
      <NavigationBar />
      <h1>Hello</h1>
    </Router>
    
  );
}

export default App;
