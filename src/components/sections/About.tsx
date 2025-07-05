import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Driven & Innovative
              <span className="block text-blue-600">Full-Stack Developer</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              22-year-old Computer Information Technology student with a minor in Mathematics at
              Minnesota State University, Mankato. Passionate about combining full-stack development
              and AI/machine learning to build impactful, real-world products.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">22</div>
                <div className="text-sm text-gray-600">Years Old</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">2</div>
                <div className="text-sm text-gray-600">Major Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Deployed</div>
              </div>
            </div>
          </div>

          {/* Main Story with Profile Photo */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                My Journey & Experience
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Through my school capstone projects, I had the opportunity to work as both a
                  software developer and software engineer. That experience gave me hands-on
                  exposure to industry-level software development including system architecture,
                  design, Agile methodology, and working across the full software development life cycle.
                </p>
                <p>
                  It was the moment everything clicked: building real solutions with real teams
                  for real users. This experience taught me that great software isn't just about
                  code—it's about understanding problems, collaborating effectively, and delivering
                  solutions that make a real impact.
                </p>
                <p>
                  Right now, I'm working on two major projects that mean a lot to me. Both are
                  startup-level applications, driven by my passion for fitness and health. I've
                  completed version one of each project and deployed them, and I am currently
                  building out the next versions aiming to launch across all platforms.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Profile Photo */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  <img
                    src="/src/assets/profile.png"
                    alt="Yohannes Admassie"
                    className="w-64 h-64 rounded-2xl shadow-2xl object-cover"
                  />
                  
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Current status
              </h3>
              <div className="grid gap-4">
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold">🎓</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">CIT Student</h4>
                    <p className="text-gray-600 text-sm">Minnesota State University, Mankato.</p>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold">💻</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">Full-Stack Developer</h4>
                    <p className="text-gray-600 text-sm">2024 full stack web devlopment Udemy Boot camp certified.
                      Skilled in modern web development, mobile apps, and AI/machine learning integration. </p>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold">🎯</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">Real-World Experience</h4>
                    <p className="text-gray-600 text-sm">Capstone projects gave me industry-level experience with Agile methodology and full SDLC.</p>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold">🚀</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">Startup Builder</h4>
                    <p className="text-gray-600 text-sm">Currently building two fitness/health startup applications with deployed v1 versions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="text-center space-y-4 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900">
              My goal isn't just to build apps—it's to build a startup that makes a real impact.
            </h3>
            <p className="text-gray-600">
              Combining technical expertise with entrepreneurial vision to create solutions that matter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
