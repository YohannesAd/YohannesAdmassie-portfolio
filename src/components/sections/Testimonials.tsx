import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks';
import { fadeInUp, staggerContainer, staggerItem } from '../../utils/animations';

const Testimonials: React.FC = () => {
  const { isVisible: headerVisible, ref: headerRef } = useScrollAnimation({ threshold: 0.2 });
  const { isVisible: testimonialsVisible, ref: testimonialsRef } = useScrollAnimation({ threshold: 0.1 });

  const testimonials = [
    {
      name: "Nahom Atinafu",
      role: "Student",
      company: "Minnesota State University",
      content: "Working with Yohannes on school projects, I've been impressed by his ability to translate complex requirements into clean, scalable code. His entrepreneurial mindset sets him apart.",
      rating: 5
    },
    {
      name: "Abi Anderson",
      role: "Team Lead",
      company: "University Collaboration",
      content: "Yohannes delivered exceptional results on our student portfolio platform. His attention to detail, communication skills, and ability to meet deadlines made him a valuable team member.",
      rating: 5
    },
    {
      name: "James Thorne",
      role: "Minnesota State University Professor",
      company: "Minnesota state University",
      content: "Yohannes consistently demonstrates exceptional problem solving skills and technical proficiency. His capstone project showcased industry level development practices and innovative thinking",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <section id="testimonials" className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-x-hidden w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="space-y-12 w-full">
          {/* Header */}
          <motion.div 
            ref={headerRef}
            initial={fadeInUp.initial}
            animate={headerVisible ? fadeInUp.animate : fadeInUp.initial}
            transition={fadeInUp.transition}
            className="text-center space-y-4 w-full"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 break-words">
              What People Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto break-words">
              Testimonials from professors, mentors, and collaborators who have worked with me
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div 
            ref={testimonialsRef}
            variants={staggerContainer}
            initial="initial"
            animate={testimonialsVisible ? "animate" : "initial"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Content */}
                <blockquote className="text-gray-600 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.role}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            initial={fadeInUp.initial}
            animate={testimonialsVisible ? fadeInUp.animate : fadeInUp.initial}
            transition={{ ...fadeInUp.transition, delay: 0.6 }}
            className="text-center bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Ready to Add Your Testimonial?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's work together and create something amazing. I'm always excited to take on new challenges.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              Start a Project Together
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
