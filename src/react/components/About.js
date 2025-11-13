import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaCalendarAlt } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-r from-primary to-accent rounded-lg relative overflow-hidden">
                <div className="absolute inset-2 bg-white dark:bg-secondary rounded-lg flex items-center justify-center">
                  {/* Replace with actual profile image when available */}
                  <div className="text-8xl font-bold text-primary">AN</div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 flex flex-col items-center justify-center">
                <span className="text-primary font-bold text-xl">1+</span>
                <span className="text-gray-600 dark:text-gray-300 text-sm text-center">Years Experience</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Computer Engineering Student</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              A tech-savvy, results-driven student, I'm passionate about innovation and learning in Computer Engineering. 
              I excel in Python and Generative AI, building scalable, intelligent apps, and leverage Flask for robust backend solutions, 
              eager to deliver impactful results in dynamic tech spaces.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <FaPhone className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-400">8369746981</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <FaCalendarAlt className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Date of Birth</h4>
                  <p className="text-gray-600 dark:text-gray-400">02-06-2005 Thane</p>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
              onClick={() => window.open('./assets/adi_resume.pdf', '_blank')}
            >
              Download Resume
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;