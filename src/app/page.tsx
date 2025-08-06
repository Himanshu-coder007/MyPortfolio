"use client";
import { useTheme } from "./context/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const name = "Himanshu Nagose";
const nameArray = name.split("");
const techStack = ["Java","JavaScript", "TypeScript","HTML","CSS","SQL","Tailwind CSS","React", "Node.js", "Next.js", "MongoDB", "Express", "MySQL"];

export default function Home() {
  const { theme } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: theme === 'dark' ? '#4ade80' : '#16a34a',
    },
    text: {
      height: 100,
      width: 100,
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
      backgroundColor: theme === 'dark' ? '#4ade80' : '#16a34a',
      mixBlendMode: "difference",
    }
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  if (!isMounted) return null;

  return (
    <main className={`min-h-screen pt-12 px-4 overflow-hidden relative ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Animated background elements */}
      {isMounted && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: 0.1,
                scale: 0.5
              }}
              animate={{
                x: Math.random() * 100,
                y: Math.random() * 100,
                transition: {
                  duration: 20 + Math.random() * 20,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
              className={`absolute rounded-full ${theme === 'dark' ? 'bg-green-900' : 'bg-green-200'}`}
              style={{
                width: `${Math.random() * 10 + 5}rem`,
                height: `${Math.random() * 10 + 5}rem`,
                filter: "blur(40px)"
              }}
            />
          ))}
        </div>
      )}

      {/* Custom cursor */}
      {isMounted && (
        <motion.div
          className="fixed top-0 left-0 h-8 w-8 rounded-full pointer-events-none z-50"
          variants={variants}
          animate={cursorVariant}
          transition={{ type: "spring", mass: 0.1 }}
        />
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Section */}
        <section className="py-8 md:py-16 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className={`text-lg ${theme === 'dark' ? 'text-green-400' : 'text-green-600'} font-mono`}
              >
                Hi, my name is
              </motion.p>
              
              <h1 
                className={`text-4xl md:text-6xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
              >
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
                        className={`${theme === 'dark' ? 'hover:text-green-400' : 'hover:text-green-600'} transition-colors`}
                      >
                        {letter === " " ? "\u00A0" : letter}
                      </motion.span>
                    ))}
                  </AnimatePresence>
                </span>
              </h1>
              
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className={`text-2xl md:text-3xl font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
              >
                I build things for the web.
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className={`text-lg max-w-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
              >
                Full Stack Developer specializing in modern JavaScript frameworks. 
                BTech Graduate from Bajaj Institute of Technology with a passion 
                for creating efficient, scalable web applications.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <motion.div 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                >
                  <a 
                    href="https://drive.google.com/file/d/1FrpmNPHIo3jpbr4PWjjf7ydsjLcIFovM/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-6 py-3 rounded-md font-medium transition-all ${
                      theme === 'dark'
                        ? 'bg-green-900 text-green-300 hover:bg-green-800'
                        : 'bg-green-600 text-white hover:bg-green-700'
                    }`}
                  >
                    View Resume
                  </a>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                >
                  <Link
                    href="/contact"
                    className={`px-6 py-3 rounded-md font-medium border ${
                      theme === 'dark'
                        ? 'border-green-400 text-green-400 hover:bg-green-900/50'
                        : 'border-green-600 text-green-600 hover:bg-green-100'
                    }`}
                  >
                    Contact Me
                  </Link>
                </motion.div>
              </motion.div>
              
              {/* Tech stack animation */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="pt-8"
              >
                <p className={`text-sm mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  Tech I work with:
                </p>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 + index * 0.1 }}
                      className={`px-3 py-1 rounded-full text-sm ${
                        theme === 'dark' 
                          ? 'bg-gray-800 text-green-400' 
                          : 'bg-green-100 text-green-800'
                      }`}
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
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
              
              {/* Animated decoration elements */}
              {isMounted && (
                <>
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className={`absolute -z-10 w-64 h-64 md:w-80 md:h-80 rounded-full border-2 ${
                      theme === 'dark' ? 'border-green-900' : 'border-green-200'
                    } top-0 left-1/2 transform -translate-x-1/2`}
                  />
                  
                  {/* Floating MERN stack icons around the photo */}
                  {[
                    { 
                      icon: "react", 
                      top: "80%", 
                      left: "20%", 
                      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
                      tooltip: "React",
                      size: 32 
                    },
                    { 
                      icon: "mongodb", 
                      top: "10%", 
                      left: "10%", 
                      src: "https://www.svgviewer.dev/static-svgs/34566/mongodb.svg",
                      tooltip: "MongoDB",
                      size: 32 
                    },
                    { 
                      icon: "express", 
                      top: "15%", 
                      left: "80%", 
                      src: "https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png",
                      tooltip: "Express",
                      size: 32 
                    },
                    
                    { 
                      icon: "node", 
                      top: "85%", 
                      left: "75%", 
                      src: "https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png?f=webp",
                      tooltip: "Node.js",
                      size: 32 
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: [0.7, 1, 0.7], 
                        y: [0, -15, 0],
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        delay: 0.5 + index * 0.2,
                        duration: 4 + Math.random() * 3,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                      className={`absolute ${theme === 'dark' ? 'text-green-400' : 'text-green-600'} 
                        hover:scale-125 transition-transform cursor-default group`}
                      style={{ 
                        top: item.top, 
                        left: item.left,
                        width: `${item.size}px`,
                        height: `${item.size}px`
                      }}
                      whileHover={{ scale: 1.3 }}
                      onMouseEnter={textEnter}
                      onMouseLeave={textLeave}
                    >
                      <Image
                        src={item.src}
                        alt={item.tooltip}
                        width={item.size}
                        height={item.size}
                        className="w-full h-full object-contain"
                      />
                      <span className={`absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xs rounded-md 
                        ${theme === 'dark' ? 'bg-gray-800 text-green-400' : 'bg-green-100 text-green-800'} 
                        opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap`}>
                        {item.tooltip}
                      </span>
                    </motion.div>
                  ))}
                </>
              )}
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}