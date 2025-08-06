"use client";
import { useTheme } from "../../context/ThemeContext";
import { motion } from "framer-motion";
import { useState } from "react";

const Education = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<number>(0);

  const educationData = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Engineering",
      institution: "Bajaj Institute of Technology, Wardha",
      university: "DBATU University",
      year: "2021 - 2025",
      percentage: "CGPA: 7.32",
      icon: "🎓"
    },
    {
      degree: "Higher Secondary Certificate",
      field: "Science (PCM)",
      institution: "New Arts, Science and Commerce College, Wardha",
      university: "MSBSHSE Board",
      year: "2019 - 2021",
      percentage: "93%",
      icon: "📚"
    },
    {
      degree: "Secondary School Certificate",
      field: "General Studies",
      institution: "Agragami High School, Wardha",
      university: "MSBSHSE Board",
      year: "2019",
      percentage: "84.60%",
      icon: "🏫"
    }
  ];

  return (
    <div className={`min-h-screen py-12 px-4 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
            My Education Journey
          </h2>

          {/* Timeline for mobile */}
          <div className="md:hidden space-y-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className={`p-6 rounded-xl shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-green-50'} border-l-4 ${
                  theme === 'dark' ? 'border-green-400' : 'border-green-600'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`text-3xl p-3 rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-green-100'}`}>
                    {edu.icon}
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {edu.degree}
                    </h3>
                    <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                      {edu.field}
                    </p>
                    <div className={`mt-2 p-2 rounded-md ${theme === 'dark' ? 'bg-gray-700' : 'bg-green-100'}`}>
                      <p className={`font-medium ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                        {edu.institution}
                      </p>
                      <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                        {edu.university} | {edu.year}
                      </p>
                    </div>
                    <div className={`mt-3 px-3 py-1 rounded-full inline-block ${
                      theme === 'dark' ? 'bg-green-900/50 text-green-300' : 'bg-green-200 text-green-800'
                    }`}>
                      <span className="font-semibold">{edu.percentage}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop view - Timeline with tabs */}
          <div className="hidden md:block">
            <div className="flex justify-center mb-8">
              {educationData.map((edu, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-3 font-medium transition-all ${activeTab === index ? 
                    (theme === 'dark' ? 'text-green-400 border-b-2 border-green-400' : 'text-green-600 border-b-2 border-green-600') : 
                    (theme === 'dark' ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700')
                  }`}
                >
                  {edu.degree.split(" ")[0]}
                </button>
              ))}
            </div>

            <div className={`p-8 rounded-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-green-50'} shadow-lg`}>
              <div className="grid grid-cols-12 gap-8 items-center">
                {/* Left side - Icon and year */}
                <div className="col-span-3 flex flex-col items-center">
                  <div className={`text-5xl p-4 rounded-full mb-4 ${theme === 'dark' ? 'bg-gray-700' : 'bg-green-100'}`}>
                    {educationData[activeTab].icon}
                  </div>
                  <div className={`text-lg font-medium ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                    {educationData[activeTab].year}
                  </div>
                </div>

                {/* Right side - Details */}
                <div className="col-span-9">
                  <h3 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {educationData[activeTab].degree}
                  </h3>
                  <p className={`text-lg mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    {educationData[activeTab].field}
                  </p>

                  <div className={`p-4 rounded-lg mb-4 ${theme === 'dark' ? 'bg-gray-700' : 'bg-green-100'}`}>
                    <h4 className={`font-semibold ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                      {educationData[activeTab].institution}
                    </h4>
                    <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {educationData[activeTab].university}
                    </p>
                  </div>

                  <div className={`inline-block px-4 py-2 rounded-full ${
                    theme === 'dark' ? 'bg-green-900/50 text-green-300' : 'bg-green-200 text-green-800'
                  }`}>
                    <span className="font-semibold">{educationData[activeTab].percentage}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress dots */}
            <div className="flex justify-center mt-8 gap-2">
              {educationData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`w-3 h-3 rounded-full transition-all ${activeTab === index ? 
                    (theme === 'dark' ? 'bg-green-400' : 'bg-green-600') : 
                    (theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300')
                  }`}
                  aria-label={`Go to ${educationData[index].degree}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skills section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16"
        >
          <h3 className={`text-2xl font-bold mb-6 text-center ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
            Academic Achievements
          </h3>
          <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-green-50'}`}>
            <ul className={`space-y-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>

              
              <li className="flex items-start gap-3">
                <span className={`mt-1 flex-shrink-0 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>•</span>
                <span>Represented Bajaj Institute of Technology in <strong>Grand Finale of Smart India Hackathon 2023</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className={`mt-1 flex-shrink-0 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>•</span>
                <span>Selected for <strong>India International Science Festival 2024</strong> project exhibition</span>
              </li>
              
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;