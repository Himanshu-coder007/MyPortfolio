// app/components/project/ProjectCard.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "../../context/ThemeContext";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
  imageUrl: string;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  githubLink,
  demoLink,
  imageUrl,
}: ProjectCardProps) => {
  const { theme } = useTheme();

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`rounded-xl overflow-hidden shadow-lg ${
        theme === "dark" ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-6">
        <h3
          className={`text-xl font-bold mb-2 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          {title}
        </h3>
        <p
          className={`mb-4 ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {description}
        </p>

        <div className="mb-4">
          <h4
            className={`text-sm font-semibold mb-2 ${
              theme === "dark" ? "text-green-400" : "text-green-600"
            }`}
          >
            Technologies:
          </h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className={`px-3 py-1 rounded-full text-xs ${
                  theme === "dark"
                    ? "bg-gray-700 text-green-400"
                    : "bg-green-100 text-green-800"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4 mt-6">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2 rounded-lg font-medium text-sm ${
                theme === "dark"
                  ? "bg-gray-700 hover:bg-gray-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-800"
              } transition-colors`}
            >
              View Code
            </a>
          )}
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2 rounded-lg font-medium text-sm ${
                theme === "dark"
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : "bg-green-500 hover:bg-green-600 text-white"
              } transition-colors`}
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;