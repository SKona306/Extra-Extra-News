
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Headlines from './components/Headlines';
import { HeadlineContext } from './contexts/HeadlineContext'

function App() {
  const [headlines, setHeadlines] = useState([])
  return (
    <div className="App">
      <HeadlineContext.Provider value={{headlines, setHeadlines}}>
        <Header />
        <Headlines />
      </HeadlineContext.Provider>
      
    </div>
  );
}

export default App;
