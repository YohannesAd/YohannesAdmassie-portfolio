import React from 'react';
import { Mail, MapPin, Rocket, Star, FileText } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/YohannesAd',
      icon: FaGithub,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/yohannes-badmassie',
      icon: FaLinkedin,
    },
    {
      name: 'Email',
      url: 'mailto:yohannes.30belachew@gmail.com',
      icon: Mail,
    },
  ];

  const quickLinks = [
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Skills', id: 'skills' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <footer className="bg-gray-900 text-white overflow-x-hidden w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
          {/* Brand & Description */}
          <div className="space-y-4 w-full">
            <h3 className="text-lg md:text-xl font-bold break-words">Yohannes Admassie</h3>
            <p className="text-gray-400 text-sm leading-relaxed break-words">
             Crafted by a developer who believes in progress, not perfection.
             Powered by passion, purpose, and consistency.
             Always learning. Always building.
            </p>
            <div className="flex space-x-4 flex-wrap">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2 hover:scale-110 transform"
                  title={link.name}
                >
                  <link.icon className="w-5 h-5 flex-shrink-0" />
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 w-full">
            <h4 className="text-base md:text-lg font-semibold break-words">Quick Links</h4>
            <ul className="space-y-2 w-full">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-white transition-colors text-sm hover:underline break-words text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href="/YohannesBAdsmassie-Resume .pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="YohannesBAdsmassie-Resume.pdf"
                  className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors text-sm hover:underline"
                >
                  <FileText className="w-3 h-3 flex-shrink-0" />
                  <span>Resume</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact CTA */}
          <div className="space-y-4 w-full">
            <h4 className="text-base md:text-lg font-semibold break-words">Let's Work Together</h4>
            <p className="text-gray-400 text-sm break-words">
              Open to internships, full-time positions, and exciting project collaborations.
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 break-words"
            >
              <span>Get In Touch</span>
              <Rocket className="w-4 h-4 flex-shrink-0" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 w-full">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 w-full sm:w-auto">
              <p className="text-gray-400 text-sm break-words text-center sm:text-left">
                © {currentYear} Yohannes Admassie. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm break-words text-center sm:text-left">
                Built with React, TypeScript & TailwindCSS
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm text-gray-400">
              <span className="flex items-center space-x-1">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="break-words">Minnesota, USA</span>
              </span>
              <span className="break-words">Open to relocation</span>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-4 pt-4 border-t border-gray-800 text-center w-full">
            <p className="text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-1 break-words">
              <span>Passionate about creating technology that makes a positive impact.</span>
              <span>Let's build something amazing together!</span>
              <Star className="w-3 h-3 text-yellow-400 flex-shrink-0" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
