import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-x-hidden w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="space-y-8 w-full">
          {/* Header */}
          <div className="text-center space-y-6 mt-12 w-full">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight break-words">
              <span className="block text-blue-600">Welcome to my Portfolio!</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed break-words px-2">
              My name is Yohannes Admassie, a 22 years old Computer Information Technology student with a minor in Mathematics at
              Minnesota State University, Mankato. Passionate about combining full-stack development
              and AI/machine learning to build impactful products that solve real-world problems.
            </p>
          </div>

          {/* Main Story with Profile Photo */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center w-full">
            <div className="space-y-10 w-full">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 break-words">
                My Journey & Experience
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed w-full">
                <p className="break-words">
                  Through my school capstone projects, I had the opportunity to work as both a
                  software developer and software engineer. That experience gave me hands-on
                  exposure to industry level software development concepts including system architecture,
                  design, Agile methodology, and working across the full software development life cycle.
                </p>
                <p className="break-words">
                 This experience taught me that great software isn't just about
                  code, it's about understanding problems, collaborating effectively, and delivering
                  solutions that make a real impact.
                </p>
                <p className="break-words">
                  Right now, I'm working on two major projects that mean a lot to me. Both are
                  startup-level applications, driven by my passion for fitness and health. I've
                  completed version one of each project and deployed them, and I am currently
                  building out the next versions aiming to launch across all platforms.
                </p>
              </div>
            </div>

            <div className="space-y-6 w-full">
              {/* Profile Photo */}
              <div className="flex justify-center lg:justify-start mt-10 lg:mt-20 w-full">
                <div className="relative">
                  <img
                    src="/src/assets/profile.png"
                    alt="Yohannes Admassie"
                    className="w-64 h-64 md:w-80 md:h-80 rounded-2xl shadow-2xl object-cover"
                  />
                </div>
              </div>
              <div className="grid gap-4 w-full">
                <div className="flex space-x-4 w-full">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold">🎓</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 break-words">CIT Student</h4>
                    <p className="text-gray-600 text-sm break-words">Minnesota State University, Mankato.</p>
                  </div>
                </div>

                <div className="flex space-x-4 w-full">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold">💻</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 break-words">Full-Stack Developer</h4>
                    <p className="text-gray-600 text-sm break-words">2024 full stack web development Udemy Boot camp certified.
                      Skilled in modern web development, mobile apps, and AI/machine learning integration.</p>
                  </div>
                </div>

                <div className="flex space-x-4 w-full">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold">🎯</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 break-words">Real-World Experience</h4>
                    <p className="text-gray-600 text-sm break-words">Capstone projects gave me industry-level experience with Agile methodology and full SDLC.</p>
                  </div>
                </div>

                <div className="flex space-x-4 w-full">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold">🚀</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 break-words">Startup Builder</h4>
                    <p className="text-gray-600 text-sm break-words">Currently building two fitness/health startup applications with deployed v1 versions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="text-center space-y-4 bg-white rounded-2xl p-6 md:p-8 shadow-lg w-full max-w-full">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 break-words px-2">
             “Our minds are capable of incredible things. With belief and consistency, anything becomes possible.”
            </h3>
            <p className="text-gray-600 break-words px-2">
              Combining technical expertise with entrepreneurial vision to create solutions that matter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
