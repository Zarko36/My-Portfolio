import './App.css';
import React from 'react';
import Sidebar from './Components/Sidebar';
import Articles from './Components/Articles';
import Title from './Components/Title';

function App() {

  return (
    <body>
      <div class="big-container">
        <Title />
        <Sidebar />
        <Articles />
      </div>
    </body>
  );
}

export default App;