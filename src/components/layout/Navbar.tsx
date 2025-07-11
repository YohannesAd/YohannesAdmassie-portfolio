import React, { useState, useEffect } from 'react';
import { FileText, X, Menu } from 'lucide-react';
import { useActiveSection } from '../../hooks';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Navigation items configuration
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  // Use custom hook to track active section
  const activeSection = useActiveSection(navItems.map(item => item.id));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-x-hidden w-full ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200'
          : 'bg-white shadow-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-16 w-full">
          {/* Logo */}
          <div className="flex-shrink-0 min-w-0">
            <button
              onClick={() => scrollToSection('about')}
              className="text-lg md:text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors break-words"
            >
              Yohannes Admassie
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block flex-1 min-w-0">
            <div className="ml-4 lg:ml-10 flex items-baseline space-x-4 lg:space-x-8 justify-center">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-2 lg:px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap ${
                    activeSection === item.id
                      ? 'text-blue-600 bg-blue-50 rounded-md'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Resume Button & Mobile Menu */}
          <div className="flex items-center space-x-2 md:space-x-4 flex-shrink-0">
            <a
              href="/YohannesBAdsmassie-Resume .pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="YohannesBAdsmassie-Resume.pdf"
              className="hidden sm:inline-flex items-center space-x-2 px-3 lg:px-4 py-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-sm font-medium rounded-lg transition-colors whitespace-nowrap"
            >
              <FileText className="w-4 h-4 flex-shrink-0" />
              <span>Resume</span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-100 active:bg-gray-200 transition-all duration-200 flex-shrink-0 touch-manipulation"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden w-full overflow-x-hidden">
            <div className="px-3 pt-3 pb-4 space-y-2 bg-white border-t border-gray-200 w-full shadow-lg">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 text-lg font-medium transition-all duration-200 break-words rounded-lg touch-manipulation ${
                    activeSection === item.id
                      ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50 active:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-3 w-full">
                <a
                  href="/YohannesBAdsmassie-Resume .pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="YohannesBAdsmassie-Resume.pdf"
                  className="flex items-center justify-center space-x-2 w-full px-4 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-base font-medium rounded-lg transition-all duration-200 max-w-full touch-manipulation active:scale-95"
                >
                  <FileText className="w-5 h-5 flex-shrink-0" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
