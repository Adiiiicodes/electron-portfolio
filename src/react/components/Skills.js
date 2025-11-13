import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaJs, FaGitAlt, FaNodeJs, FaAws } from 'react-icons/fa';
import { SiMongodb, SiFlask, SiPostman, SiNextdotjs, SiTailwindcss, SiRedis, SiTypescript, SiRender, SiNgrok, SiNginx, SiGithub, SiSupabase, SiGoogleanalytics, SiPostgresql, SiDocker, SiLinux } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'Python', level: 5, icon: <FaPython className="text-4xl" /> },
    { name: 'Flask', level: 5, icon: <SiFlask className="text-4xl" /> },
    { name: 'MongoDB', level: 5, icon: <SiMongodb className="text-4xl" /> },
    { name: 'Git', level: 5, icon: <FaGitAlt className="text-4xl" /> },
    { name: 'GitHub', level: 5, icon: <SiGithub className="text-4xl" /> },
    { name: 'Node.js', level: 5, icon: <FaNodeJs className="text-4xl" /> },
    { name: 'AWS', level: 3, icon: <FaAws className="text-4xl" /> },
    { name: 'Docker', level: 5, icon: <SiDocker className="text-4xl" /> },
    { name: 'Redis', level: 4, icon: <SiRedis className="text-4xl" /> },
    { name: 'JavaScript', level: 4, icon: <FaJs className="text-4xl" /> },
    { name: 'Next.js', level: 5, icon: <SiNextdotjs className="text-4xl" /> },
    { name: 'Typescript', level: 4, icon: <SiTypescript className="text-4xl" /> },
    { name: 'Tailwind CSS', level: 5, icon: <SiTailwindcss className="text-4xl" /> },
    { name: 'Linux', level: 4, icon: <SiLinux className="text-4xl" /> },
    { name: 'PostgreSQL', level: 4, icon: <SiPostgresql className="text-4xl" /> },
    { name: 'Postman', level: 5, icon: <SiPostman className="text-4xl" /> },
    { name: 'Render', level: 5, icon: <SiRender className="text-4xl" /> },
    { name: 'Ngrok', level: 5, icon: <SiNgrok className="text-4xl" /> },
    { name: 'Nginx', level: 4, icon: <SiNginx className="text-4xl" /> },
    { name: 'Supabase', level: 5, icon: <SiSupabase className="text-4xl" /> },
    { name: 'Google Analytics', level: 4, icon: <SiGoogleanalytics className="text-4xl" /> },
  ];

  const languages = [
    { name: 'Marathi', level: 5 },
    { name: 'Hindi', level: 5 },
    { name: 'English', level: 5 },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-8 text-center md:text-left"
            >
              Technical Skills
            </motion.h3>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {skills.map((skill) => (
                <motion.div key={skill.name} variants={item} className="bg-white dark:bg-secondary/50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col items-center">
                    <div className="text-primary mb-4">{skill.icon}</div>
                    <h4 className="font-bold mb-2">{skill.name}</h4>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-2xl ${
                            i < skill.level ? 'text-accent' : 'text-gray-300 dark:text-gray-600'
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
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
              className="text-2xl font-bold mb-8 text-center md:text-left"
            >
              Languages
            </motion.h3>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {languages.map((language) => (
                <motion.div key={language.name} variants={item}>
                  <div className="flex justify-between mb-2">
                    <h4 className="font-bold">{language.name}</h4>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-lg ${
                            i < language.level ? 'text-accent' : 'text-gray-300 dark:text-gray-600'
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-primary to-accent h-2.5 rounded-full"
                      style={{ width: `${(language.level / 5) * 100}%` }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-16 bg-white dark:bg-secondary/50 rounded-lg p-6 shadow-md"
            >
              <h3 className="text-xl font-bold mb-4">Personal Interests</h3>
              <p className="text-gray-700 dark:text-gray-300">
                When I'm not coding, I enjoy exploring new technologies, reading books, watching movies, scrolling on LinkedIn as it's a great platform to learn about new people, learning new things, and best place to get some inspiration. 
                and staying updated with the latest developments in AI and machine learning.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;