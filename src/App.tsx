import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          {/* Main landing page with all sections */}
          <Route path="/" element={<HomePage />} />
          {/* We'll add project detail routes later when your project components are ready */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
