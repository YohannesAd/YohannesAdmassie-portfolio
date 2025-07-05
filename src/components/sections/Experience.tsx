import React, { useState } from 'react';
import ProfessionalExperience from './ProfessionalExperience';
import PersonalProjects from './PersonalProjects';

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'professional' | 'personal'>('professional');

  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Work Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A combination of professional work and personal projects that showcase 
              my growth as a developer and my commitment to continuous learning.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center">
            <div className="bg-white rounded-lg p-1 shadow-md">
              <div className="flex space-x-1">
                <button
                  onClick={() => setActiveTab('professional')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeTab === 'professional'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                
                  <span>Professional</span>
                </button>
                <button
                  onClick={() => setActiveTab('personal')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeTab === 'personal'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
              
                  <span>Personal Projects</span>
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="transition-all duration-300">
            {activeTab === 'professional' ? (
              <ProfessionalExperience />
            ) : (
              <PersonalProjects />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
