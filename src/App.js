import React from 'react';
import './App.css';
import ChronoWrapper from "./components/ChronoWrapper";

function App() {
  return (
    <div className="App">
      <ChronoWrapper time={120}/>
      <ChronoWrapper time={340}/>
      <ChronoWrapper time={10}/>
      <ChronoWrapper time={920}/>
      <ChronoWrapper time={34}/>
      <ChronoWrapper time={390}/>
      <ChronoWrapper time={90}/>
      <ChronoWrapper time={10000}/>
    </div>
  );
}

export default App;
