import React, { Component } from 'react';
import Header from './components/header';
import DisplayCount from './components/displayCount';
import Posts from './components/displayPosts';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
       <div className='main-container'>
         <DisplayCount/>
         <Posts />
       </div> 
      </div>
    );
  }
}

export default App;
