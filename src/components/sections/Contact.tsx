import React, { useState } from 'react';
import { Mail, Send, FileText } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks';

const Contact: React.FC = () => {
  // Animation hooks for different sections
  const { isVisible: headerVisible, ref: headerRef } = useScrollAnimation({ threshold: 0.2 });
  const { isVisible: contactVisible, ref: contactRef } = useScrollAnimation({ threshold: 0.1 });
  const { isVisible: formVisible, ref: formRef } = useScrollAnimation({ threshold: 0.2 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Portfolio Contact');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:yohannes.30belachew@gmail.com?subject=${subject}&body=${body}`;
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'yohannes.30belachew@gmail.com',
      link: 'mailto:yohannes.30belachew@gmail.com',
      description: 'Send me an email'
    },
    {
      icon: FaLinkedin,
      title: 'LinkedIn',
      value: 'Yohannes Badmassie',
      link: 'https://www.linkedin.com/in/yohannes-badmassie',
      description: 'Connect professionally'
    },
    {
      icon: FaGithub,
      title: 'GitHub',
      value: 'YohannesAd',
      link: 'https://github.com/YohannesAd',
      description: 'View my code'
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 bg-gray-50 overflow-x-hidden w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="space-y-12 w-full">
          {/* Header */}
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full"
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start w-full">
              {/* Left side - Ready to Hire */}
              <div className="text-center lg:text-left space-y-4">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 break-words">
                  Ready to Hire?
                </h2>
                <p className="text-lg text-gray-600 break-words">
                  I'm actively seeking internship and full-time opportunities. Let's discuss how I can contribute to your team's success.
                </p>

                {/* Availability Banner */}
                <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  Available for Immediate Start
                </div>
              </div>

              {/* Right side - Let's Talk */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border-l-4 border-purple-500 w-full">
                <h4 className="font-semibold text-gray-900 mb-3 break-words">📞 Let's Talk!</h4>
                <p className="text-sm text-gray-600 mb-4 break-words">
                  Skip the back and forth emails. Schedule a call directly and let's discuss how I can contribute to your team.
                </p>
                <a
                  href="https://cal.com/yohannes-admassie-1wjjpz/let-s-discuss-opportunities"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-all duration-200 touch-manipulation active:scale-95"
                >
                  📅 Schedule a Call
                </a>
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 w-full">
            {/* Contact Methods */}
            <motion.div
              ref={contactRef}
              initial={{ opacity: 0, x: -50 }}
              animate={contactVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="space-y-8 w-full"
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 break-words">
                Let's Connect
              </h3>

              <div className="space-y-4 w-full">
                {contactMethods.map((method) => (
                  <a
                    key={method.title}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 w-full max-w-full touch-manipulation active:scale-95"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <method.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 text-base break-words">{method.title}</h4>
                      <p className="text-blue-600 font-medium text-sm break-words">{method.value}</p>
                    </div>
                    <div className="text-blue-600 flex-shrink-0">
                      <span className="text-lg">→</span>
                    </div>
                  </a>
                ))}
              </div>

              {/* Quick Info */}
              <div className="bg-blue-50 rounded-xl p-6 w-full max-w-full">
                <h4 className="font-semibold text-gray-900 mb-3 break-words">Why Hire Me?</h4>
                <div className="space-y-2 text-sm text-gray-600 w-full">
                  <p className="break-words"><strong>🎯 Immediate Impact:</strong> 2 deployed applications, proven track record</p>
                  <p className="break-words"><strong>💼 Work Ready:</strong> Industry experience through university collaborations</p>
                  <p className="break-words"><strong>🚀 Growth Mindset:</strong> Continuously learning and building new projects</p>
                  <p className="break-words"><strong>⚡ Quick Response:</strong> Usually reply within 24 hours</p>
                  <p className="break-words"><strong>📍 Location:</strong> Minnesota, USA (Open to remote/relocation)</p>
                </div>
              </div>



              {/* Resume Download */}
              <a
                href="/YohannesBAdsmassie-Resume .pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="YohannesBAdsmassie-Resume.pdf"
                className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 w-full sm:w-auto justify-center touch-manipulation active:scale-95"
              >
                <FileText className="w-4 h-4 flex-shrink-0" />
                <span>Download My Resume</span>
              </a>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: 50 }}
              animate={formVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
              className="space-y-8 w-full"
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 break-words">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6 w-full">
                <div className="grid md:grid-cols-2 gap-6 w-full">
                  <div className="w-full">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 break-words">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors max-w-full"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 break-words">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors max-w-full"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="w-full">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2 break-words">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors max-w-full"
                    placeholder="Project Collaboration / Job Opportunity / General Inquiry"
                  />
                </div>

                <div className="w-full">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 break-words">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none max-w-full"
                    placeholder="Tell me about your project, opportunity, or just say hello!"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 max-w-full"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5 flex-shrink-0" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
