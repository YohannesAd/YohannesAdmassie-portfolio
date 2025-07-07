
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WorkExperience1 from './data/professional/WorkExprience1';
import WorkExperience2 from './data/professional/WorkExprience2';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white overflow-x-hidden w-full max-w-full">
        <Routes>
          {/* Main landing page with all sections */}
          <Route path="/" element={<HomePage />} />
          {/* Work experience detail pages */}
          <Route path="/work-experience/minnesota-state-university" element={<WorkExperience1 />} />
          <Route path="/work-experience/university-of-wisconsin-madison" element={<WorkExperience2 />} />
          {/* We'll add more project detail routes later when your project components are ready */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
