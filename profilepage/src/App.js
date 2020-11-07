import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Profile from './components/Profile';

class App extends Component {

  render() {

  return (
    <div className="App">
       <TopBar />
       <hr/>
        <Profile  />
    </div>
  );

}
}

export default App;
