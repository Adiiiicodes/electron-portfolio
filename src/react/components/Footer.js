import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaGithub, FaArrowUp } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/aditya-nalawade-a4b081297/', icon: <FaLinkedin /> },
    { name: 'Instagram', href: 'https://www.instagram.com/adicodessss/', icon: <FaInstagram /> },
    { name: 'GitHub', href: 'https://github.com/Adiiiicodes', icon: <FaGithub /> },
    {name: 'X', href:'https://x.com/scriptSageAdi?t=hT2DX3oxX-SNIqdtgRnn7Q&s=09', icon: <BsTwitterX /> },
  ];

  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <a href="#home">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-3xl font-bold mb-4 inline-block"
              >
                Aditya<span className="text-accent">.</span>
              </motion.div>
            </a>
            <p className="text-gray-400 mb-6">
              A passionate Computer Engineering student with expertise in Python, AI, and Full-Stack development.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="text-white hover:text-accent transition-colors duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>
                    <motion.span
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-accent transition-colors duration-300 cursor-pointer inline-block"
                    >
                      {link.name}
                    </motion.span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <p className="text-gray-400 mb-2">Panvel, Maharashtra</p>
            <p className="text-gray-400 mb-2">Yes! kal subhe panvel nikalna hai wala Panvel</p>
            <p className="text-gray-400 mb-2">Phone: 8369746981</p>
            <p className="text-gray-400">Email: nalawadeaditya017@gmail.com</p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Aditya Nalawade. All rights reserved.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="bg-primary hover:bg-accent text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;