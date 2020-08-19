import React from 'react';
import logo from './logo.svg';
import './App.css';

import EssayForm from './components/EssayForm.js'
import NewPost from './components/NewPost.js'



function App() {
  return (
    <div style={{backgroundColor : "lightblue"}}className="App">
      <EssayForm />
      <NewPost />
    
    </div>
  );
}

export default App;
