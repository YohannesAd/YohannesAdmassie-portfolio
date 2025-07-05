import React from 'react';

const PersonalProjects: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Personal Projects
        </h3>
        <p className="text-gray-600 mb-8">
          Entrepreneurial startup projects driven by passion for fitness and health technology
        </p>
      </div>

      {/* Hiwot Fit App */}
      <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-600">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-1">
              Founder & Developer
            </h4>
            <div className="flex items-center space-x-2 text-gray-600 mb-3">
            
              <span className="font-medium">Personal Startup Project – Hiwot Fit App</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500 mb-1">
              Fitness Application
            </div>
            <div className="text-sm font-medium text-gray-700">
              April 2025 – Present
            </div>
          </div>
        </div>

        <p className="text-gray-600 mb-4 leading-relaxed">
          Built and launched the first version of a full-stack fitness application designed to help users
          track workouts, monitor progress, and calculate calories — inspired by real fitness experience
          and built with real users in mind. The app features a video-based exercise library, a calorie
          calculator, and a journaling system with file/image attachments for tracking progress.
        </p>

        <div className="space-y-3 mb-4">
          <h5 className="font-semibold text-gray-900">Technical Achievements:</h5>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Developed the app end-to-end using Next.js, React, MongoDB, and JWT, deployed on Vercel</span>
            </li>
            <li className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Implemented core features including workout tracking, video streaming, note-taking with file uploads, and progress visualization</span>
            </li>
            <li className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Designed an in-app calorie calculator (BMR/TDEE) with personalized macro recommendations</span>
            </li>
            <li className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Currently building Version 2 with full cross-platform support and new features to launch as a startup product</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Next.js</span>
          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">React</span>
          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">MongoDB</span>
          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">JWT</span>
          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Vercel</span>
        </div>

        <div className="p-3 bg-purple-50 rounded-lg">
          <p className="text-sm text-purple-800">
            <strong>Status:</strong> Version 1 deployed and live. Currently developing Version 2 for cross-platform startup launch.
          </p>
        </div>
      </div>

      {/* GlucoVision App */}
      <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-600">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-1">
              Founder &  Developer
            </h4>
            <div className="flex items-center space-x-2 text-gray-600 mb-3"> 
           <span className="font-medium">GlucoVision – Diabetes Management App</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500 mb-1">
              Healthcare Application
            </div>
            <div className="text-sm font-medium text-gray-700">
              May 2025 – Present
            </div>
          </div>
        </div>

        <p className="text-gray-600 mb-4 leading-relaxed">
          Designed and developed a mobile-first diabetes management application inspired by my father's
          lifelong struggle with diabetes. GlucoVision empowers diabetic patients to easily track their
          blood sugar levels, visualize trends, and generate medical-grade PDF reports to share with doctors.
          It also features a real-time AI assistant powered by OpenAI and machine learning models for
          personalized insights and glucose trend predictions.
        </p>

        <div className="space-y-3 mb-4">
          <h5 className="font-semibold text-gray-900">Technical Achievements:</h5>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Built with React Native, FastAPI, PostgreSQL, and TypeScript, with secure authentication via JWT</span>
            </li>
            <li className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Developed a PDF export feature using ReportLab, enabling patients to take organized logs to doctor visits</span>
            </li>
            <li className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Integrated OpenAI GPT-4 API for a live in-app diabetes assistant and chatbot experience</span>
            </li>
            <li className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Implemented predictive analytics using scikit-learn, providing insights and trend forecasting</span>
            </li>
            <li className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Designed and deployed a fully documented, production-grade backend with FastAPI, structured logging, and robust error handling</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">React Native</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">FastAPI</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">PostgreSQL</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">TypeScript</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">OpenAI GPT-4</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">scikit-learn</span>
        </div>

        <div className="p-3 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Personal Impact:</strong> Inspired by my father's diabetes journey. Building technology to help diabetic patients
            better manage their health and communicate with healthcare providers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalProjects;
