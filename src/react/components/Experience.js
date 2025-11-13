import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaMedal, FaSearch, FaTrophy } from 'react-icons/fa';
import { Fa2, FaN } from 'react-icons/fa6';

const Experience = () => {
  const experiences = [
    {
      title: 'Founder',
      company: (
        <a
          href="https://nextech-ebon.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-accent transition-colors"
        >
          NexTech
        </a>
      ),
      location: 'Panvel',
      period: 'May 2025 - Present',
      description:
        'As a Founder and GenAI Developer at NexTech, I lead the development of personalised AI-driven solutions. My role involves managing teams and client acquisition, and tech lead. This venture has honed my leadership skills, deepened my technical expertise, and helped me understand business, marketing and outreach.',
      icon: <FaN />,
    },
    {
      title: 'Co-founder',
      company: (
        <a
          href="https://huntly-eight.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary  hover:text-accent transition-colors"
        >
          HuntLy
        </a>
      ),
      location: 'Panvel',
      period: 'May 2025 - Present',
      description:
        'As a Co-founder and Backend Developer at HuntLy, I lead the development of an AI-driven job search platform, enhancing user experience through innovative features. My role involves architecting scalable backend systems, integrating AI functionalities, and optimizing performance. This venture has honed my leadership skills, deepened my technical expertise, and reinforced my commitment to leveraging technology for real-world solutions.',
      icon: <FaSearch />,
    },
    {
      title: 'SDE Intern',
      company: (
        <a
          href="https://level.game"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary  hover:text-accent transition-colors"
        >
          level SuperMind Co-founded by Beer Biceps
        </a>
      ),
      location: 'Lower Parel',
      period: 'January 2025 - March 2025',
      description:
        'As a proactive Backend Developer for SuperSoul (upcoming launch), I engineer AI-powered backend systems using Flask and optimize non-AI components with Node.js, driving seamless scalability and performance. I spearhead DevOps initiatives and integrate cutting-edge AI features, amplifying product innovation. This internship has elevated my technical prowess, sharpened my critical problem-solving abilities, and accelerated my agility in high-impact development environments.',
      icon: <FaBriefcase />,
    },
  ];


  const achievements = [
    {
      title: 'Hackaronyx 2025 - National Level Hackathon Finalist',
      organization: 'St. Vincent Palloti College of Engineering and technology, Nagpur',
      period: 'June 2025',
      description:
        'I led Project: X to be finalists of Hackaronyx 2025, a national-level hackathon where our team secured rank - 9 fromm 3800+ teams from all over India. We engineered an AI-driven solution for beginners in tech field who want to focus on project based learning, we built a DIY mission generator which generate cool project ideas fully personalsed for the user to enhance the learning experience.',
      icon: <FaMedal />,
    },
    {
      title: 'National Level Generative-AI Buildathon Semifinalist',
      organization: '100x Engineers, Banglore',
      period: 'June 2025',
      description:
        'I led Project: X to be semifinalsits of 100xEngineers Buildathon2 June 2025, we got qualified after a 72 hours-online GenAI hackathon where our team was selected among 3500+ teams from all over India. We engineered an AI-driven solution for recruiters, demonstrating innovation and teamwork, deepening my expertise in AI and GenAI while reinforcing my commitment to solving real-world problems.',
      icon: <FaMedal />,
    },
    {
      title: 'National Level Generative-AI Hackathon Winner',
      organization: 'Mumbai',
      period: 'January 2025',
      description:
        'I led Project: X to secure 1st place at the Level SuperMind National Hackathon, a 24-hour challenge where our team was selected among 800 top coders from over 25,000 teams across India. We engineered an AI-driven solution to boost productivity and efficiency, demonstrating innovation and teamwork, deepening my expertise in AI and GenAI while reinforcing my commitment to solving real-world problems.',
      icon: <FaTrophy />,
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

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Achievements</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-8 flex items-center"
            >
              <FaBriefcase className="text-primary mr-3" /> Work Experience
            </motion.h3>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-primary/30 space-y-12"
            >
              {experiences.map((exp, index) => (
                <motion.div key={index} variants={item} className="relative">
                  <div className="absolute -left-[41px] w-20 h-20 bg-white dark:bg-secondary rounded-full border-4 border-primary flex items-center justify-center text-primary text-xl">
                    {exp.icon}
                  </div>
                  <div className="bg-white dark:bg-secondary/50 rounded-lg p-6 shadow-md ml-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="bg-primary/10 text-primary text-sm font-medium py-1 px-3 rounded-full inline-block mb-2">
                      {exp.period}
                    </div>
                    <h4 className="text-xl font-bold mb-1">{exp.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {exp.company} | {exp.location}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-8 flex items-center"
            >
              <FaTrophy className="text-primary mr-3" /> Achievements
            </motion.h3>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-primary/30 space-y-12"
            >
              {achievements.map((achievement, index) => (
                <motion.div key={index} variants={item} className="relative">
                  <div className="absolute -left-[41px] w-20 h-20 bg-white dark:bg-secondary rounded-full border-4 border-accent flex items-center justify-center text-accent text-xl">
                    {achievement.icon}
                  </div>
                  <div className="bg-white dark:bg-secondary/50 rounded-lg p-6 shadow-md ml-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="bg-accent/10 text-accent text-sm font-medium py-1 px-3 rounded-full inline-block mb-2">
                      {achievement.period}
                    </div>
                    <h4 className="text-xl font-bold mb-1">{achievement.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{achievement.organization}</p>
                    <p className="text-gray-700 dark:text-gray-300">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;