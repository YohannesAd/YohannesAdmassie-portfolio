import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks';
import ProfessionalExperience from './ProfessionalExperience';
import PersonalProjects from './PersonalProjects';

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'professional' | 'personal'>('professional');

  // Animation hooks for different sections
  const { isVisible: headerVisible, ref: headerRef } = useScrollAnimation({ threshold: 0.2 });
  const { isVisible: tabsVisible, ref: tabsRef } = useScrollAnimation({ threshold: 0.3 });
  const { isVisible: contentVisible, ref: contentRef } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="experience" className="py-12 sm:py-16 bg-gray-50 overflow-x-hidden w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="space-y-8 sm:space-y-12 w-full">
          {/* Header */}
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center space-y-4 w-full"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 break-words">
              Work Experience
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto break-words px-2">
              A combination of professional work and personal projects that showcase
              my growth as a developer and my commitment to continuous learning.
            </p>
          </motion.div>

          {/* Tabs */}
          <motion.div
            ref={tabsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={tabsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="flex justify-center w-full"
          >
            <div className="bg-white rounded-lg p-1 shadow-md max-w-full">
              <div className="flex space-x-1 flex-wrap justify-center">
                <button
                  onClick={() => setActiveTab('professional')}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 touch-manipulation ${
                    activeTab === 'professional'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <span>Professional</span>
                </button>
                <button
                  onClick={() => setActiveTab('personal')}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 touch-manipulation ${
                    activeTab === 'personal'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <span>Personal Projects</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0 }}
            animate={contentVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="transition-all duration-300 w-full overflow-x-hidden"
          >
            {activeTab === 'professional' ? (
              <ProfessionalExperience />
            ) : (
              <PersonalProjects />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
