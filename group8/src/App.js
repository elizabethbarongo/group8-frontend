import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './sharedcomponents/Sidebar';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        <Routes>
        
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
