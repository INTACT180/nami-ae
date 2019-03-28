import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import soundFile from './audio/welcome.mp3'

class App extends Component {
  constructor(props){
    super(props);
    console.warn(soundFile);
    this.sound = new Audio(soundFile);
    this.sound.play();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload. :)
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
