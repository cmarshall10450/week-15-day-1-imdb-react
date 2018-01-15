import React, { Component } from 'react';
import FilmBox from './components/FilmBox';

class App extends Component {
  render() {
    return (
      <div className="container">
        <FilmBox title="UK Opening This Week" />
      </div>
    );
  }
}

export default App;
