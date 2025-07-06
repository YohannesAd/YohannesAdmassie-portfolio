import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Users, Code, Database, Cloud, FileText, Download } from 'lucide-react';
import deliverableImage from '../../assets/deliverable.png';

/**
 * WorkExperience1 Component
 *
 * Displays detailed information about the Software Engineer Co-op position
 * at Minnesota State University. Features a two-column layout with project
 * description on the left and deliverable image on the right.
 */
const WorkExperience1: React.FC = () => {
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
              <div className="flex items-center space-x-2 text-blue-600">
                <span className="text-2xl">🎓</span>
                <span className="text-lg font-semibold">Student Portfolio System</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Software Engineer Co-op
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-gray-600">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Minnesota State University, Mankato</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Spring 2025</span>
                </div>
              </div>

              <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                Frontend Lead
              </div>
            </div>

            {/* Tech stack */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                <Code className="w-5 h-5" />
                <span>Tech Stack</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'React', 'tRPC', 'SQLite', 'Drizzle ORM', 'Azure Blob Storage', 'Auth.js'].map((tech) => (
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
                A full-stack portfolio management system built from the ground up to replace outdated, inconsistent submission methods used by
                students and faculty at Minnesota State University, Mankato. Designed to support long-term data storage and academic evaluation,
                the platform enables over 100 students to organize and submit portfolio evidence while allowing faculty to efficiently review, assess,
                and archive work for accreditation. The system serves both the Computer Science and Twin Cities Engineering programs and was developed with scalability 
                and future departmental adoption in mind.
              </p>
            </div>

            {/* Key contributions */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>As a core Software Engineer on the team, I:</span>
              </h3>

              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Participated in the full SDLC ,from stakeholder interviews and buy-vs-build
                    analysis to research, system design, and architecture decisions.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Led the UI/UX implementation using React and Tailwind, building responsive
                    student and faculty dashboards.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Integrated secure file upload and long term storage via Azure Blob Storage
                    with access control.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Implemented authentication flows using Auth.js and helped structure the
                    database with SQLite and Drizzle ORM.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Contributed to key documentation including requirements analysis, design docs,
                    and the technical handover report.
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
                    src={deliverableImage}
                    alt="Student Portfolio System Interface"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4">
                    <p className="text-sm text-gray-600">
                      Student Portfolio System - Modern interface for portfolio submission and faculty review
                    </p>
                  </div>
                </div>

                {/* Impact section */}
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2 flex items-center space-x-2">
                    <Cloud className="w-4 h-4" />
                    <span>Project Impact</span>
                  </h4>
                  <p className="text-blue-800 text-sm leading-relaxed">
                    This system will streamline the portfolio review process for faculty while
                    providing students with a modern, user-friendly platform to showcase their
                    academic work and achievements.
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
                      <Download className="w-4 h-4 text-blue-600" />
                      <a
                        href="/Portfolio Project Timeline and Milestones.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 hover:underline font-medium text-sm"
                      >
                        Project Timeline and Milestones
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Download className="w-4 h-4 text-blue-600" />
                      <a
                        href="/Portfolio Project Learning Plan.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 hover:underline font-medium text-sm"
                      >
                        Project Learning Plan
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Download className="w-4 h-4 text-blue-600" />
                      <a
                        href="/Portfolio Project RAD.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 hover:underline font-medium text-sm"
                      >
                        Requirement Analysis Document (RAD)
                      </a>
                    </div>
                  </div>
                </div>

                {/* Research Phase */}
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Research Phase</h4>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Download className="w-4 h-4 text-green-600" />
                      <a
                        href="/Official Recommendation.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 hover:underline font-medium text-sm"
                      >
                        System Recommendation Documentation
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Download className="w-4 h-4 text-green-600" />
                      <a
                        href="/Survey Questions.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 hover:underline font-medium text-sm"
                      >
                        Survey Questions File
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

export default WorkExperience1;