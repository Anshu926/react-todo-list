import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Initial from './Initial';

function App() {
  return (
    <Router>  
      <Routes>
        <Route path="/" element={<Initial />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
