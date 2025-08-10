"use client";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiMail, FiLinkedin, FiGithub, FiSend } from "react-icons/fi";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "");
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    
    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        date: new Date().toLocaleString()
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        templateParams
      );

      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error("Failed to send message:", error);
      setSubmitError("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/himanshu-nagose-b06324233/",
      icon: <FiLinkedin className="text-xl" />,
      color: "text-blue-500"
    },
    {
      name: "GitHub",
      url: "https://github.com/Himanshu-coder007",
      icon: <FiGithub className="text-xl" />,
      color: "text-gray-500"
    },
  ];

  return (
    <div className={`min-h-screen py-12 px-4 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Get In Touch
          </h1>
          <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`p-8 rounded-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-green-50'} shadow-lg`}
          >
            <h2 className={`text-2xl font-semibold mb-6 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
              Send Me a Message
            </h2>
            
            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-6 p-4 rounded-lg ${theme === 'dark' ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-800'}`}
              >
                Thanks for your message! I&apos;ll get back to you soon.
              </motion.div>
            )}
            
            {submitError && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-6 p-4 rounded-lg ${theme === 'dark' ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-800'}`}
              >
                {submitError}
              </motion.div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className={`block mb-2 font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 ${
                    theme === 'dark' 
                      ? 'bg-gray-700 border-gray-600 focus:ring-green-500 focus:border-green-500 text-white' 
                      : 'bg-white border-gray-300 focus:ring-green-400 focus:border-green-400 text-gray-900'
                  }`}
                />
              </div>
              
              <div>
                <label 
                  htmlFor="email" 
                  className={`block mb-2 font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 ${
                    theme === 'dark' 
                      ? 'bg-gray-700 border-gray-600 focus:ring-green-500 focus:border-green-500 text-white' 
                      : 'bg-white border-gray-300 focus:ring-green-400 focus:border-green-400 text-gray-900'
                  }`}
                />
              </div>
              
              <div>
                <label 
                  htmlFor="subject" 
                  className={`block mb-2 font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 ${
                    theme === 'dark' 
                      ? 'bg-gray-700 border-gray-600 focus:ring-green-500 focus:border-green-500 text-white' 
                      : 'bg-white border-gray-300 focus:ring-green-400 focus:border-green-400 text-gray-900'
                  }`}
                />
              </div>
              
              <div>
                <label 
                  htmlFor="message" 
                  className={`block mb-2 font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 ${
                    theme === 'dark' 
                      ? 'bg-gray-700 border-gray-600 focus:ring-green-500 focus:border-green-500 text-white' 
                      : 'bg-white border-gray-300 focus:ring-green-400 focus:border-green-400 text-gray-900'
                  }`}
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 ${
                  theme === 'dark' 
                    ? 'bg-green-600 hover:bg-green-700 text-white' 
                    : 'bg-green-500 hover:bg-green-600 text-white'
                } transition-colors`}
              >
                {isSubmitting ? (
                  <span className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <>
                    <FiSend />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className={`p-8 rounded-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-green-50'} shadow-lg`}>
              <h2 className={`text-2xl font-semibold mb-6 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full ${theme === 'dark' ? 'bg-gray-700 text-green-400' : 'bg-green-100 text-green-600'}`}>
                    <FiMail className="text-xl" />
                  </div>
                  <div>
                    <h3 className={`font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Email</h3>
                    <a 
                      href="mailto:himanshunagose80@gmail.com" 
                      className={`hover:underline ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}
                    >
                      himanshunagose80@gmail.com
                    </a>
                  </div>
                </div>
            
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full ${theme === 'dark' ? 'bg-gray-700 text-green-400' : 'bg-green-100 text-green-600'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3 className={`font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Location</h3>
                    <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className={`p-8 rounded-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-green-50'} shadow-lg`}>
              <h2 className={`text-2xl font-semibold mb-6 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                Connect With Me
              </h2>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className={`flex flex-col items-center justify-center p-4 rounded-lg transition-all ${
                      theme === 'dark' 
                        ? 'bg-gray-700 hover:bg-gray-600' 
                        : 'bg-white hover:bg-green-100'
                    } shadow-sm`}
                  >
                    <span className={`${social.color} mb-2`}>{social.icon}</span>
                    <span className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
            
            {/* Availability */}
            <div className={`p-8 rounded-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-green-50'} shadow-lg`}>
              <h2 className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                Availability
              </h2>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                I&apos;m currently looking for new opportunities. My inbox is always open for potential collaborations or just to say hello!
              </p>
              <div className="flex items-center gap-2">
                <span className={`inline-block w-3 h-3 rounded-full bg-green-500 animate-pulse`}></span>
                <span className={theme === 'dark' ? 'text-green-400' : 'text-green-600'}>Available for work</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;