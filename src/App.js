import React, { Component } from 'react';
import './App.css';

import GoogleBtn from './GoogleBtn'

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <div className="container">
          <h1>
            Log in to start
          </h1>
        <GoogleBtn/>
        </div>
      </div>
    );
  }
}
export default App;
