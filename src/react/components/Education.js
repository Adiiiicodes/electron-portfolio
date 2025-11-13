import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';

const Education = () => {
  const educationItems = [
    {
      degree: 'B.E. Computer Engineering',
      institution: 'Pillai HOC College of Engineering & Technology, Rasayani',
      period: 'August 2023 - Present',
      description: 'Currently a Third-year B.E. student in Computer Engineering at Pillai HOC College of Engineering and Technology.',
      icon: <FaGraduationCap />,
    },
    {
      degree: '11th - 12th Standard, CBSE Curriculum',
      institution: 'Radcliffe Group of Schools, Kharghar',
      period: 'April 2021 - March 2023',
      description: 'I excelled in Physics, Chemistry, and Mathematics (PCM) under the CBSE board, while strategically preparing for JEE Mains and competitive exams, boosting my analytical prowess, problem-solving acumen, and time-optimization skills.',
      icon: <FaSchool />,
    },
    {
      degree: 'JrKG - 10th Standard, CBSE Curriculum',
      institution: "Ryan's St.Joseph's High School, Khanda Colony",
      period: 'April 2009 - March 2021',
      description: 'These were the years which shaped my foundational knowledge, helped me generate some interest and experiment with it in both field of education and sports and I can also say these were some prime hand cricket playing years.',
      icon: <FaSchool />,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="education" className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto pl-8 border-l-2 border-primary/30 space-y-12"
        >
          {educationItems.map((item, index) => (
            <motion.div key={index} className="relative">
              <div className="absolute -left-[41px] w-20 h-20 bg-white dark:bg-secondary rounded-full border-4 border-primary flex items-center justify-center text-primary text-xl">
                {item.icon}
              </div>
              <div className="bg-white dark:bg-secondary/50 rounded-lg p-6 shadow-md ml-6 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-primary/10 text-primary text-sm font-medium py-1 px-3 rounded-full inline-block mb-2">
                  {item.period}
                </div>
                <h4 className="text-xl font-bold mb-1">{item.degree}</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{item.institution}</p>
                <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            My educational journey has equipped me with strong foundations in computer science, mathematics, and problem-solving.
            I continuously seek to expand my knowledge through self-learning, online courses, and practical projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;