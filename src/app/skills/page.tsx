"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const TechStack = () => {
  const { theme } = useTheme();

  const technologies = [
    { name: "Java", icon: "/tech-icons/java.svg" },
    { name: "JavaScript", icon: "/tech-icons/javascript.svg" },
    { name: "TypeScript", icon: "/tech-icons/typescript.svg" },
    { name: "SQL", icon: "/tech-icons/sql.svg" },
    { name: "HTML", icon: "/tech-icons/html.svg" },
    { name: "CSS", icon: "/tech-icons/css.svg" },
    { name: "Tailwind CSS", icon: "/tech-icons/tailwindcss.svg" },
    { name: "React", icon: "/tech-icons/react.svg" },
    { name: "Redux", icon: "/tech-icons/redux.svg" },
    { name: "Next.js", icon: "/tech-icons/nextjs.svg" },
    { name: "Node.js", icon: "/tech-icons/nodejs.svg" },
    { name: "Express", icon: "/tech-icons/express.svg" },
    { name: "MongoDB", icon: "/tech-icons/mongodb.svg" },
    { name: "MySQL", icon: "/tech-icons/mysql.svg" },
    { name: "Postgresql", icon: "/tech-icons/postgresql.svg" },
    { name: "Firebase", icon: "/tech-icons/firebase.svg" },
    { name: "Docker", icon: "/tech-icons/docker.svg" },
    { name: "Kubernets", icon: "/tech-icons/kubernetes.svg" },
    { name: "CI/CD", icon: "/tech-icons/cicd.svg" },
    { name: "AWS", icon: "/tech-icons/aws.svg" },
    { name: "Git/Github", icon: "/tech-icons/github.svg" },
    { name: "Postman", icon: "/tech-icons/postman.svg" },
    { name: "RestApi", icon: "/tech-icons/api.svg" },
    { name: "Figma", icon: "/tech-icons/figma.svg" },
    { name: "Netlify", icon: "/tech-icons/netlify.svg" },
  ];

  return (
    <div
      className={`min-h-screen py-12 px-4 ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className={`text-3xl md:text-4xl font-bold mb-12 text-center ${
              theme === "dark" ? "text-green-400" : "text-green-600"
            }`}
          >
            My Tech Stack
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`flex flex-col items-center p-6 rounded-xl ${
                  theme === "dark"
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-green-50 hover:bg-green-100"
                } transition-all shadow-md`}
              >
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  {tech.icon.endsWith(".svg") ? (
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span className="text-4xl">{tech.icon}</span>
                  )}
                </div>
                <h3
                  className={`text-lg font-medium text-center ${
                    theme === "dark" ? "text-white" : "text-gray-800"
                  }`}
                >
                  {tech.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TechStack;