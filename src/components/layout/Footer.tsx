import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/YohannesAd',
      icon: '💻',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/yohannes-badmassie',
      icon: '💼',
    },
    {
      name: 'Email',
      url: 'mailto:yohannes.30belachew@gmail.com',
      icon: '📧',
    },
  ];

  const quickLinks = [
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Skills', id: 'skills' },
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
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Yohannes Admassie</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Driven CIT student and full-stack developer passionate about building
              innovative startup applications that solve real-world problems.
              Currently developing fitness and healthcare technology solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2 hover:scale-110 transform"
                  title={link.name}
                >
                  <span className="text-xl">{link.icon}</span>
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-white transition-colors text-sm hover:underline"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Let's Work Together</h4>
            <p className="text-gray-400 text-sm">
              Open to internships, full-time positions, and exciting project collaborations.
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
            >
              <span>Get In Touch</span>
              <span className="text-lg">🚀</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} Yohannes Admassie. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm">
                Built with React, TypeScript & TailwindCSS
              </p>
            </div>

            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>📍 Minnesota, USA</span>
              <span>💼 Open to opportunities</span>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-4 pt-4 border-t border-gray-800 text-center">
            <p className="text-xs text-gray-500">
              Passionate about creating technology that makes a positive impact.
              Let's build something amazing together! 🌟
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
