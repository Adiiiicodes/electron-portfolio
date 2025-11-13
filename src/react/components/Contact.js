import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
const { ipcRenderer } = window.require('electron');

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      // In Electron, we use IPC to communicate with the main process
      ipcRenderer.send('contact-form-submit', formData);
      
      // Set up listener for response
      ipcRenderer.once('contact-form-result', (event, result) => {
        if (result.success) {
          setSubmitSuccess(true);
          setFormData({ name: "", email: "", subject: "", message: "" });
          
          setTimeout(() => {
            setSubmitSuccess(false);
          }, 5000);
        } else {
          setSubmitError(result.error || "Failed to send message. Please try again.");
        }
        setIsSubmitting(false);
      });
    } catch (error) {
      setSubmitError("An error occurred. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Feel free to reach out to me for any inquiries, collaborations, or just to say hello!
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <FaPhone className="text-2xl text-primary" />
                <div>
                  <h4 className="font-medium text-lg">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-400">8369746981</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-2xl text-primary" />
                <div>
                  <h4 className="font-medium text-lg">Email</h4>
                  <p className="text-gray-600 dark:text-gray-400">nalawadeaditya017@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <h4 className="font-bold mb-4">Follow Me</h4>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/aditya-nalawade-a4b081297/" target="_blank" rel="noopener noreferrer" className="text-primary text-2xl hover:text-accent transition">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/adicodessss/" target="_blank" rel="noopener noreferrer" className="text-primary text-2xl hover:text-accent transition">
                <FaInstagram />
              </a>
              <a href="https://github.com/Adiiiicodes" target="_blank" rel="noopener noreferrer" className="text-primary text-2xl hover:text-accent transition">
                <FaGithub />
              </a>
              <a href="https://x.com/scriptSageAdi?t=hT2DX3oxX-SNIqdtgRnn7Q&s=09" target="_blank" rel="noopener noreferrer" className="text-primary text-2xl hover:text-accent transition">
                <BsTwitterX />
              </a>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-secondary/50 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-100 text-green-800 p-4 rounded-lg mb-6"
                >
                  Your message has been sent successfully!
                </motion.div>
              )}

              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-100 text-red-800 p-4 rounded-lg mb-6"
                >
                  {submitError}
                </motion.div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block font-medium text-gray-700 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary text-black"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block font-medium text-gray-700 mb-2">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary text-black"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="subject" className="block font-medium text-gray-700 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary text-black"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block font-medium text-gray-700 mb-2">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    rows={5} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary text-black"
                  ></textarea>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }} 
                  whileTap={{ scale: 0.98 }} 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="btn-primary w-full"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;