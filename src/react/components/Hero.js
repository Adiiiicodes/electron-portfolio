import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  // Images must be imported or accessed via electron's file system
  // For now we'll assume they're in a public directory accessible by relative path
  const images = [
    "./assets/PIC1.jpg",
    "./assets/PIC2.png",
    "./assets/PIC3.png",
    "./assets/PIC4.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1500); // Change image every 1.5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-accent/10 blur-3xl"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xl md:text-2xl font-medium text-accent mb-2"
            >
              Hello, I&apos;m
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Aditya Nalawade
            </motion.h1>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-6"
            >
              Aura Farmer | Building <a href="https://huntlylanding.vercel.app" className="hover:underline">HuntLy</a> & <a href="https://nextech-ebon.vercel.app" className="hover:underline">NexTech</a>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-base md:text-lg text-gray-700 dark:text-gray-400 mb-8 max-w-lg"
            >
              Co-Founder at Nextech and HuntLy | Full-stack Developer | GenAI Developer | DevOps Practitioner. 
              I design scalable backend systems, develop intelligent AI solutions using Python and Generative AI, 
              and manage cloud infrastructure on AWS EC2 alongside various AWS services for seamless deployment and operations. 
              Passionate about innovation, I blend performance, automation, and scalability to deliver impactful, reliable applications.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Contact Me
                </motion.button>
              </a>
              <a href="#about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-outline"
                >
                  Learn More
                </motion.button>
              </a>
            </motion.div>
          </motion.div>

          {/* Animated Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative hidden md:block"
          >
            <div className="w-80 h-80 mx-auto relative">
              {/* Outer Glowing Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 animate-pulse"></div>

              {/* Rotating Image Container */}
              <div className="absolute inset-4 bg-white dark:bg-secondary rounded-full flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 1.2, opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    className="w-full h-full"
                  >
                    <img
                      src={images[currentIndex]}
                      alt="Profile"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <a href="#about">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center cursor-pointer"
          >
            <span className="text-sm text-gray-600 dark:text-gray-400 mb-2">Scroll Down</span>
            <FaArrowDown className="text-primary" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;