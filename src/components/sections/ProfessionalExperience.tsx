import React from 'react';

const ProfessionalExperience: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Professional Experience
        </h3>
        <p className="text-gray-600 mb-8">
          Real-world software development experience through university collaborations
        </p>
      </div>

      {/* Software Engineer - Minnesota State University */}
      <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-600">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-1">
              Software Engineer
            </h4>
            <div className="flex items-center space-x-2 text-gray-600 mb-3">
              <span className="text-lg">🏛️</span>
              <span className="font-medium">Minnesota State University</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500 mb-1">
              University Collaboration
            </div>
            <div className="text-sm font-medium text-gray-700">
              Jan 2025 - May 2025
            </div>
          </div>
        </div>

        <p className="text-gray-600 mb-4 leading-relaxed">
          Collaborated on a team to design and develop a student portfolio hosting web application
          from scratch to deployment for the Minnesota State University Computer Science Program
          and the Twin Cities Engineering Program.
        </p>

        <div className="space-y-3">
          <h5 className="font-semibold text-gray-900">Key Contributions:</h5>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Full-stack development from initial design to production deployment</span>
            </li>
            <li className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Cross-program collaboration serving both Computer Science and Engineering students</span>
            </li>
            <li className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Team-based development using industry-standard practices and methodologies</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Software Developer - University of Wisconsin, Madison */}
      <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-600">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-1">
              Software Developer
            </h4>
            <div className="flex items-center space-x-2 text-gray-600 mb-3">
              <span className="text-lg">🏛️</span>
              <span className="font-medium">University of Wisconsin, Madison</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500 mb-1">
              Educational Technology Project
            </div>
            <div className="text-sm font-medium text-gray-700">
              Aug 2024 - Dec 2024
            </div>
          </div>
        </div>

        <p className="text-gray-600 mb-4 leading-relaxed">
          Collaborated on the development of The Hidden Village Online (THV-O) Version 6,
          an educational video game designed to teach young students mathematics through embodied learning.
          The game utilizes a motion-capture API and webcam-based landmark detection to track body movements
          as players complete physical tasks linked to geometric and mathematical concepts.
        </p>

        <div className="space-y-3">
          <h5 className="font-semibold text-gray-900">Technical Achievements:</h5>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Led front-end feature development using React PIXI and JavaScript, delivering core UI components 
                including the main menu, settings interface, and interactive game elements.</span>
            </li>
            <li className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Actively engaged in weekly client meetings to gather feedback, refine requirements, 
                and align deliverables with stakeholder expectations.</span>
            </li>
            <li className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Contributed to the full software development lifecycle, including creation of the Team Contract, 
                Requirements Analysis Document (RAD), System Architecture Design, and final Handover Documentation.</span>
            </li>
          </ul>
        </div>

        <div className="mt-4 p-3 bg-green-50 rounded-lg">
          <p className="text-sm text-green-800">
            <strong>Impact:</strong> Innovative approach to education technology, combining physical movement
            with mathematical learning to enhance student engagement and comprehension.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalExperience;
