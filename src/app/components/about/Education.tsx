"use client";
import { useTheme } from "../../context/ThemeContext";
import { motion } from "framer-motion";

const Education = () => {
  const { theme } = useTheme();

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
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
            My Education Journey
          </h2>

          {/* Vertical Timeline Flowchart */}
          <div className="relative">
            {/* Timeline line */}
            <div className={`absolute left-1/2 transform -translate-x-1/2 h-full w-1 ${theme === 'dark' ? 'bg-green-400' : 'bg-green-600'}`}></div>
            
            {educationData.map((edu, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative mb-12 w-full ${index % 2 === 0 ? 'pl-8 pr-4 md:pr-0 md:pl-0 md:mr-auto md:w-1/2' : 'pl-4 pr-8 md:pl-0 md:pr-0 md:ml-auto md:w-1/2'}`}
              >
                {/* Timeline dot */}
                <div className={`absolute top-6 rounded-full w-5 h-5 ${theme === 'dark' ? 'bg-green-400' : 'bg-green-600'} ${index % 2 === 0 ? '-left-2 md:left-auto md:-right-2' : '-right-2 md:right-auto md:-left-2'}`}></div>
                
                <div className={`p-6 rounded-xl shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-green-50'} border-l-4 md:border-l-0 ${index % 2 === 0 ? 'md:border-r-4' : 'md:border-l-4'} ${
                  theme === 'dark' ? 'border-green-400' : 'border-green-600'
                }`}>
                  <div className="flex flex-col md:flex-row items-start gap-4">
                    <div className={`text-3xl p-3 rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-green-100'}`}>
                      {edu.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                        <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                          {edu.degree}
                        </h3>
                        <span className={`text-sm ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                          {edu.year}
                        </span>
                      </div>
                      <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                        {edu.field}
                      </p>
                      <div className={`mt-2 p-3 rounded-md ${theme === 'dark' ? 'bg-gray-700' : 'bg-green-100'}`}>
                        <p className={`font-medium ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                          {edu.institution}
                        </p>
                        <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                          {edu.university}
                        </p>
                      </div>
                      <div className={`mt-3 px-3 py-1 rounded-full inline-block ${
                        theme === 'dark' ? 'bg-green-900/50 text-green-300' : 'bg-green-200 text-green-800'
                      }`}>
                        <span className="font-semibold">{edu.percentage}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

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
        </motion.div>
      </div>
    </div>
  );
};

export default Education;