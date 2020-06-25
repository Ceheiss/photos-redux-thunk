import React from 'react';
import './App.css';
import CardList from './CardList';

function App() {
  return (
    <div className="App">
      <h1>Picture-App</h1>
      <h2>
        Not really an App. But hey, a man has to practice using Redux and
        Redux-Thunk
      </h2>
      <CardList />
    </div>
  );
}

export default App;
