import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import FormExample from './LoginPage.js';

class App extends Component {
  render() {
    return (
      <div className="container">
        <FormExample />
      </div>
    );
  }
}

export default App;
