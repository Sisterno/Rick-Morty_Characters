import Header from './components/Header'
import './App.css';
import Characters from './components/Characters/Characters';
import React from 'react';
import {ContextHooks} from './components/ContextHook';

function App() {
  return (
    <div className="App">
      <ContextHooks>
        <Header/>
        <Characters/>
      </ContextHooks>
    </div>
  );
}

export default App;
