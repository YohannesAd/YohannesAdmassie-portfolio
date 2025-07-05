import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: 'white' | 'gray' | 'dark' | 'gradient';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl' | '6xl' | 'full';
}

const Section: React.FC<SectionProps> = ({
  children,
  id,
  className = '',
  background = 'white',
  padding = 'lg',
  maxWidth = '6xl',
}) => {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-gray-900',
    gradient: 'bg-gradient-to-br from-blue-50 via-white to-purple-50',
  };
  
  const paddingClasses = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-24',
  };
  
  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '4xl': 'max-w-4xl',
    '6xl': 'max-w-6xl',
    full: 'max-w-full',
  };
  
  const classes = `${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`;
  
  return (
    <section id={id} className={classes}>
      <motion.div
        className={`mx-auto px-4 sm:px-6 lg:px-8 ${maxWidthClasses[maxWidth]}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
