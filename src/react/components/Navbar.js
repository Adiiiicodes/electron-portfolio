import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    { name: 'X', href: 'https://x.com/scriptSageAdi?t=hT2DX3oxX-SNIqdtgRnn7Q&s=09', icon: <BsTwitterX /> },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-secondary/90 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#home">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-primary cursor-pointer"
            >
              Aditya<span className="text-accent">.</span>
            </motion.div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href}>
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="text-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
                  >
                    {link.name}
                  </motion.span>
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="text-foreground hover:text-primary transition-colors duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col items-end justify-center gap-1.5">
                <motion.span
                  animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  className="w-6 h-0.5 bg-foreground block transition-all duration-300"
                ></motion.span>
                <motion.span
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-4 h-0.5 bg-foreground block transition-all duration-300"
                ></motion.span>
                <motion.span
                  animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  className="w-6 h-0.5 bg-foreground block transition-all duration-300"
                ></motion.span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-secondary shadow-lg"
        >
          <div className="px-4 py-5 space-y-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href}>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="block text-foreground hover:text-primary py-2 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </motion.div>
              </a>
            ))}
            <div className="flex items-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="text-foreground hover:text-primary transition-colors duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;