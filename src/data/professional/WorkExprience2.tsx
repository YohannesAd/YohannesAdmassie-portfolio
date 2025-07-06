import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Users, Code, Database, Cloud, FileText, Download } from 'lucide-react';
import thvdImage from '../../assets/THV-D.jpg';

/**
 * WorkExperience2 Component
 *
 * Displays detailed information about the Software Engineer position
 * at University of Wisconsin – Madison for THV-O project. Features a two-column
 * layout with project description on the left and deliverable image on the right.
 */
const WorkExperience2: React.FC = () => {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Custom back navigation that scrolls to experience section
  const handleBackClick = () => {
    navigate('/', { replace: true });
    // Small delay to ensure navigation completes before scrolling
    setTimeout(() => {
      const experienceSection = document.getElementById('experience');
      if (experienceSection) {
        experienceSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with back navigation */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={handleBackClick}
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Portfolio</span>
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Left column - Project description */}
          <div className="space-y-6">
            {/* Project header */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-green-600">
             
                <span className="text-lg font-semibold">The Hidden Village Online (THV-O)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Software Developer Co-op
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-gray-600">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span> (Remote)University of Wisconsin – Madison</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Fall 2024</span>
                </div>
              </div>

              <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                Front-End Focus
              </div>
            </div>

            {/* Tech stack */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                <Code className="w-5 h-5" />
                <span>Tech Stack</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'React PIXI', 'Node.js', 'Firebase'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-lg font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project description */}
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Contributed to the development of Version 6 of The Hidden Village Online (THV-O),
                an educational video game created by the research team at the University of Wisconsin, Madison.
                The game is designed to teach mathematical reasoning to young students through embodied
                learning using motion capture technology to connect physical movement with interactive
                problem-solving tasks.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our team was responsible for extending the work from Version 5, adding new features,
                improving usability, and expanding the system's data capture capabilities for ongoing
                academic research.
              </p>
            </div>

            {/* Key contributions */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Key Contributions:</span>
              </h3>

              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Implemented critical UI components using React PIXI, including the main menu,
                    settings, and game interaction features.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Developed a CSV to JSON data processing tool in Node.js, improving data export
                    accuracy for research analysis.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Participated in client meetings, milestone presentations, and the creation of
                    technical documentation (RAD, handover reports, Firebase setup).
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Contributed to improving system usability through visual bug fixes and layout
                    enhancements.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Worked on Firebase integration for motion data collection and real-time event
                    tracking.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right column - Deliverable image */}
          <div className="space-y-6">
            <div className="sticky top-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                  <Database className="w-5 h-5" />
                  <span>Project Deliverable</span>
                </h3>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden border">
                  <img
                    src={thvdImage}
                    alt="The Hidden Village Online Game Interface"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4">
                    <p className="text-sm text-gray-600">
                      THV-O Version 6 - Educational game interface with motion capture integration
                    </p>
                  </div>
                </div>

                {/* Impact section */}
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <h4 className="font-semibold text-green-900 mb-2 flex items-center space-x-2">
                    <Cloud className="w-4 h-4" />
                    <span>Project Impact</span>
                  </h4>
                  <p className="text-green-800 text-sm leading-relaxed">
                    This innovative educational game combines physical movement with mathematical
                    learning, providing researchers with valuable data on embodied learning while
                    engaging young students in interactive problem-solving.
                  </p>
                </div>

                {/* Project Documentation */}
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                    <FileText className="w-4 h-4" />
                    <span>Project Documentation</span>
                  </h4>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Download className="w-4 h-4 text-green-600" />
                      <a
                        href="/Project Learning Plan(THV).pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 hover:underline font-medium text-sm"
                      >
                        Project Learning Plan (THV)
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Download className="w-4 h-4 text-green-600" />
                      <a
                        href="/THV RAD.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 hover:underline font-medium text-sm"
                      >
                        THV RAD
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Download className="w-4 h-4 text-green-600" />
                      <a
                        href="/Timeline & Milestones.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 hover:underline font-medium text-sm"
                      >
                        Timeline & Milestones
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Download className="w-4 h-4 text-green-600" />
                      <a
                        href="/Client Evaluation.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 hover:underline font-medium text-sm"
                      >
                        Client Evaluation
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience2;