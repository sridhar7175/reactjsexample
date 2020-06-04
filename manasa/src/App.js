import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Users from './Users';
import Register from './Register';
import Movies from './Movies';
import BooksLibrary from './BooksLibrary'
import Contact from './Contact';
import Librarys from './Librarys';

class App extends Component {
 
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Librarys </h1>
        </header>
        <Register/>
        
      
      </div>
    
    );
  }
}

export default App;
