import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Mail, Phone, MessageCircle } from 'lucide-react';

const FloatingActionButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show FAB after scrolling down 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const actions = [
    {
      icon: FileText,
      label: 'Download Resume',
      action: () => {
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'Yohannes_Admassie_Resume.pdf';
        link.click();
      },
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      icon: Mail,
      label: 'Send Email',
      action: () => {
        window.location.href = 'mailto:yohannes.30belachew@gmail.com?subject=Job Opportunity';
      },
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      icon: Phone,
      label: 'Schedule Call',
      action: () => {
        // Your professional Cal.com scheduling link
        window.open('https://cal.com/yohannes-admassie-1wjjpz/let-s-discuss-opportunities', '_blank');
      },
      color: 'bg-purple-600 hover:bg-purple-700'
    },
    {
      icon: MessageCircle,
      label: 'Quick Message',
      action: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      },
      color: 'bg-orange-600 hover:bg-orange-700'
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute bottom-16 right-0 space-y-3"
          >
            {actions.map((action, index) => (
              <motion.button
                key={action.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.1 }}
                onClick={action.action}
                className={`flex items-center space-x-3 ${action.color} text-white px-4 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 group`}
              >
                <action.icon className="w-5 h-5" />
                <span className="text-sm font-medium whitespace-nowrap">{action.label}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 ${isOpen ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'} text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center`}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? (
            <span className="text-xl font-bold">×</span>
          ) : (
            <span className="text-xl font-bold">💼</span>
          )}
        </motion.div>
      </motion.button>

      {/* Tooltip */}
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap"
        >
          Quick Actions
          <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
        </motion.div>
      )}
    </div>
  );
};

export default FloatingActionButton;
