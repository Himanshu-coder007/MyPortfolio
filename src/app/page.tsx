"use client";
import { useTheme } from "./context/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const name = "Himanshu Nagose";
const nameArray = name.split("");

export default function Home() {
  const { theme } = useTheme();

  return (
    <main className={`min-h-screen pt-24 px-4 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="py-12 md:py-24 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className={`text-4xl md:text-5xl font-bold ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                Hello, I'm{" "}
                <span className="inline-block">
                  <AnimatePresence>
                    {nameArray.map((letter, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.1,
                          delay: index * 0.1,
                        }}
                        style={{ display: "inline-block" }}
                      >
                        {letter === " " ? "\u00A0" : letter}
                      </motion.span>
                    ))}
                  </AnimatePresence>
                </span>
              </h1>
              
              <p className={`text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Full Stack Developer | BTech Graduate from Bajaj Institute of Technology
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    href="/about" 
                    className={`px-6 py-3 rounded-md font-medium ${
                      theme === 'dark'
                        ? 'bg-green-900 text-green-300 hover:bg-green-800'
                        : 'bg-green-600 text-white hover:bg-green-700'
                    }`}
                  >
                    More About Me
                  </Link>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    href="/contact" 
                    className={`px-6 py-3 rounded-md font-medium ${
                      theme === 'dark'
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    Contact
                  </Link>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className={`w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 ${
                theme === 'dark' ? 'border-green-400' : 'border-green-600'
              } shadow-lg`}>
                <Image
                  src="/images/Photo.png"
                  alt="Himanshu Nagose"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              
              {/* Animated decoration elements */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className={`absolute -z-10 w-64 h-64 md:w-80 md:h-80 rounded-full border-2 ${
                  theme === 'dark' ? 'border-green-900' : 'border-green-200'
                } top-0 left-1/2 transform -translate-x-1/2`}
              />
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}