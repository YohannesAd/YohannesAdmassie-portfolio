import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem, hoverLift } from '../../utils/animations';
import profileImage from '../../assets/profile.png';

const About: React.FC = () => {
  // Animation hooks for different sections
  const { isVisible: headerVisible, ref: headerRef } = useScrollAnimation({ threshold: 0.2 });
  const { isVisible: contentVisible, ref: contentRef } = useScrollAnimation({ threshold: 0.1 });
  const { isVisible: profileVisible, ref: profileRef } = useScrollAnimation({ threshold: 0.2 });
  const { isVisible: missionVisible, ref: missionRef } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section id="about" className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-x-hidden w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="space-y-8 w-full">
          {/* Header */}
          <motion.div
            ref={headerRef}
            initial={fadeInUp.initial}
            animate={headerVisible ? fadeInUp.animate : fadeInUp.initial}
            transition={fadeInUp.transition}
            className="text-center space-y-6 mt-12 w-full"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight break-words">
              
              <span className="block text-gray-900">Ready to Drive Innovation</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed break-words px-2">
              Computer Science student with <strong>4+ years of coding experience</strong> and <strong>2 deployed startup applications</strong>.
              Specializing in React, Next.js, Python, and AI integration. Seeking internship or full time opportunities to
              contribute to innovative tech solutions and drive business growth.
            </p>

            {/* Key Stats */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">2</div>
                <div className="text-sm text-gray-600">Deployed Apps</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">4+</div>
                <div className="text-sm text-gray-600">Years Coding</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">15+</div>
                <div className="text-sm text-gray-600">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">100%</div>
                <div className="text-sm text-gray-600">Committed</div>
              </div>
            </div>

            

            {/* Value Proposition Banner */}
            <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl border-l-4 border-green-500">
              <div className="text-center">
                <h4 className="text-lg font-bold text-gray-900 mb-2">🎯 Ready to Make an Impact</h4>
                <p className="text-gray-700">
                  <strong>Immediate availability</strong> • <strong>Proven results</strong> • <strong>Growth mindset</strong> • <strong>Team player</strong>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Main Story with Profile Photo */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center w-full">
            <motion.div
              ref={contentRef}
              initial={fadeInLeft.initial}
              animate={contentVisible ? fadeInLeft.animate : fadeInLeft.initial}
              transition={{ ...fadeInLeft.transition, delay: 0.2 }}
              className="space-y-10 w-full"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 break-words">
                Why Hire Me?
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed w-full">
                <p className="break-words">
                  <strong>Proven Track Record:</strong> Successfully built and deployed 2 full stack applications from concept to production,
                  demonstrating end to end development capabilities and entrepreneurial mindset.
                </p>
                <p className="break-words">
                  <strong>Industry Experience:</strong> Gained hands on experience through university capstone projects working as both
                  software developer and software engineer, following Agile methodology and complete SDLC processes.
                </p>
                <p className="break-words">
                  <strong>Technical Excellence:</strong> Proficient in modern tech stack (React, Next.js, Python, AI/ML) with
                  strong problem-solving skills and ability to learn new technologies quickly.
                </p>
                <p className="break-words">
                  <strong>Business Impact:</strong> Currently scaling two startup applications with plans for multi platform deployment,
                  showing ability to think beyond code and drive business value.
                </p>
              </div>
            </motion.div>

            <motion.div
              ref={profileRef}
              initial={fadeInRight.initial}
              animate={profileVisible ? fadeInRight.animate : fadeInRight.initial}
              transition={{ ...fadeInRight.transition, delay: 0.4 }}
              className="space-y-6 w-full"
            >
              {/* Profile Photo */}
              <div className="flex justify-center lg:justify-start mt-10 lg:mt-20 w-full">
                <motion.div
                  className="relative"
                  {...hoverLift}
                >
                  <img
                    src={profileImage}
                    alt="Yohannes Admassie"
                    className="w-64 h-64 md:w-80 md:h-80 rounded-2xl shadow-2xl object-cover"
                  />
                </motion.div>
              </div>
              <motion.div
                className="grid gap-4 w-full"
                variants={staggerContainer}
                initial="initial"
                animate={profileVisible ? "animate" : "initial"}
              >
                <motion.div
                  className="flex space-x-4 w-full"
                  variants={staggerItem}
                  {...hoverLift}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold">🎓</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 break-words">Computer Science Student</h4>
                    <p className="text-gray-600 text-sm break-words">Minnesota State University, Mankato. Expected Graduation: May 2026</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex space-x-4 w-full"
                  variants={staggerItem}
                  {...hoverLift}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold">💻</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 break-words">Full-Stack Developer</h4>
                    <p className="text-gray-600 text-sm break-words">2024 Full Stack Web development Certified (Udemy BootCamp).
                      Skilled in modern web development, mobile apps, and AI/machine learning integration.</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex space-x-4 w-full"
                  variants={staggerItem}
                  {...hoverLift}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold"> 🏆</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 break-words">Academic Excellence</h4>
                    <p className="text-gray-600 text-sm break-words">Strong foundation in Computer Science fundamentals with hands-on experience in advanced topics including AI, parallel computing, and software engineering.</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex space-x-4 w-full"
                  variants={staggerItem}
                  {...hoverLift}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold">📚</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 break-words">Additional courses</h4>
                    <p className="text-gray-600 text-sm break-words"> Data Structure And Algorithms,
                       Operating Systems, Computer Architecture, Topics In Information Management Systems, Database And Information Security, Programing Language</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Mission Statement */}
          <motion.div
            ref={missionRef}
            initial={{ opacity: 0, y: 30 }}
            animate={missionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            className="text-center space-y-4 bg-white rounded-2xl p-6 md:p-8 shadow-lg w-full max-w-full"
          >
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 break-words px-2">
             “Our minds are capable of incredible things. With belief and consistency, anything becomes possible.”
            </h3>
            <p className="text-gray-600 break-words px-2">
              Combining technical expertise with entrepreneurial vision to create solutions that matter.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
