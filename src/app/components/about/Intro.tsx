"use client";
import { useTheme } from "../../context/ThemeContext";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const Intro = () => {
  const { theme } = useTheme();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const infoItems = [
    {
      title: "Specialization",
      content: "Computer Engineering",
      icon: "🎓"
    },
    {
      title: "Experience",
      content: "Intern | Fresher",
      icon: "💼"
    },
    {
      title: "Location",
      content: "Wardha, Maharashtra",
      icon: "📍"
    }
  ];

  return (
    <div className={`min-h-screen py-12 px-4 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Photo Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className={`w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 ${
              theme === 'dark' ? 'border-green-400' : 'border-green-600'
            } shadow-lg relative z-10`}>
              <Image
                src="/images/Photo.png"
                alt="Himanshu Nagose"
                width={320}
                height={320}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            
            {/* Decorative elements */}
            <div className={`absolute -z-10 w-64 h-64 md:w-80 md:h-80 rounded-full border-2 ${
              theme === 'dark' ? 'border-green-900' : 'border-green-200'
            } top-0 left-1/2 transform -translate-x-1/2`} />
            
            <div className={`absolute -z-20 w-72 h-72 md:w-96 md:h-96 rounded-full ${
              theme === 'dark' ? 'bg-green-900/20' : 'bg-green-200/50'
            } top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-xl`} />
          </motion.div>

          {/* Information Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h1 className={`text-4xl md:text-5xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Himanshu Nagose
            </h1>
            
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Passionate Full Stack Developer specializing in modern web technologies
            </p>
            
            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {infoItems.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  onMouseEnter={() => setHoveredItem(item.title)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`p-4 rounded-lg transition-all ${
                    theme === 'dark' 
                      ? 'bg-gray-800 hover:bg-gray-700' 
                      : 'bg-green-50 hover:bg-green-100'
                  } ${hoveredItem === item.title ? 'ring-2 ring-green-500' : ''}`}
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h3 className={`font-semibold ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                    {item.title}
                  </h3>
                  <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>{item.content}</p>
                </motion.div>
              ))}
            </div>
            
            {/* About Me Section */}
            <div className="pt-4">
              <h2 className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                About Me
              </h2>
              <div className={`p-6 rounded-lg ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-green-50'
              }`}>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                  I am a passionate web developer who loves to tackle and solve programming challenges. 
                  Since my academic days, I've participated in two national-level hackathons - SIH 2023 
                  and IISF 2024, showcasing my problem-solving skills and technical prowess.
                </p>
                <p className={`mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                  I'm particularly excited about implementing AI technologies in web development to create 
                  smarter, more intuitive applications. As a fast and eager learner, I pride myself on being 
                  detail-oriented and adaptable to changing project requirements, ensuring I can quickly 
                  pivot to meet business goals and deliver exceptional results.
                </p>
                <p className={`mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                  My journey in tech is driven by curiosity and a relentless pursuit of knowledge, always 
                  looking for opportunities to push boundaries and create impactful digital experiences.
                </p>
              </div>
            </div>
            
            {/* Hackathon Badges */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className={`px-4 py-2 rounded-full flex items-center gap-2 ${
                theme === 'dark' ? 'bg-gray-800 text-green-400' : 'bg-green-100 text-green-800'
              }`}>
                <span className="text-sm font-medium">SIH 2023 Participant</span>
              </div>
              <div className={`px-4 py-2 rounded-full flex items-center gap-2 ${
                theme === 'dark' ? 'bg-gray-800 text-green-400' : 'bg-green-100 text-green-800'
              }`}>
                <span className="text-sm font-medium">IISF 2024 Participant</span>
              </div>
              <div className={`px-4 py-2 rounded-full flex items-center gap-2 ${
                theme === 'dark' ? 'bg-gray-800 text-green-400' : 'bg-green-100 text-green-800'
              }`}>
                <span className="text-sm font-medium">AI Enthusiast</span>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Intro;