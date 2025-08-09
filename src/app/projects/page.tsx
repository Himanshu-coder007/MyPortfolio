// app/projects/page.tsx
"use client";
import ProjectCard from "../components/project/ProjectCard";
import { useTheme } from "../context/ThemeContext";

const ProjectsPage = () => {
  const { theme } = useTheme();

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce application with user authentication, product catalog, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubLink: "https://github.com/username/ecommerce-platform",
      demoLink: "https://ecommerce-demo.example.com",
      imageUrl: "/images/projects/ecommerce.jpg",
    },
    {
      title: "Task Management App",
      description:
        "A productivity application for managing tasks with drag-and-drop functionality and team collaboration features.",
      technologies: ["TypeScript", "Next.js", "Firebase", "Tailwind CSS"],
      githubLink: "https://github.com/username/task-manager",
      demoLink: "https://task-manager-demo.example.com",
      imageUrl: "/images/projects/task-manager.jpg",
    },
    {
      title: "Weather Dashboard",
      description:
        "Real-time weather information dashboard with 5-day forecast and location-based services.",
      technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation API"],
      githubLink: "https://github.com/username/weather-dashboard",
      imageUrl: "/images/projects/weather.jpg",
    },
    {
      title: "AI Image Generator",
      description:
        "Web application that generates images based on text prompts using AI models.",
      technologies: ["Next.js", "OpenAI API", "Cloudinary", "Tailwind CSS"],
      githubLink: "https://github.com/username/ai-image-generator",
      demoLink: "https://ai-image-demo.example.com",
      imageUrl: "/images/projects/ai-generator.jpg",
    },
  ];

  return (
    <div className={`min-h-screen py-12 px-4 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className={`text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            My Projects
          </h1>
          <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Here are some of my featured projects. Each one was built to solve a particular problem or explore new technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;