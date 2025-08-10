// app/projects/page.tsx
"use client";
import ProjectCard from "../components/project/ProjectCard";
import { useTheme } from "../context/ThemeContext";

const ProjectsPage = () => {
  const { theme } = useTheme();

  const projects = [
    {
      title: "Job Portal",
      description:
        "Developed a web-based job portal enabling admin to register companies, post job openings, and manage applications. Implemented user authentication for job seekers to apply for positions, upload resumes, and track application status. Integrated an admin dashboard for reviewing resumes and selecting or rejecting candidates, streamlining the recruitment process.",
      technologies: ["React", "Node.js", "MongoDB", "Redux", "JWT Authentication","Cloudinary"],
      githubLink: "https://github.com/Himanshu-coder007/Job-Portal",
      demoLink: "https://job-portal-livid-rho.vercel.app/",
      imageUrl: "/projects/jobportal.png",
    },
    {
      title: "Chat Application",
      description:
        "Developed a web-based chat platform allowing users to register, log in, and communicate with all active users in real time. Implemented user authentication, real-time messaging, and online user tracking to enhance engagement. Designed a responsive interface for seamless communication across devices.",
      technologies: ["React", "Node.js", "MongoDB", "Redux", "Socket.io"],
      githubLink: "https://github.com/Himanshu-coder007/Chat-application",
      demoLink: "https://chat-application-neon-eight.vercel.app/",
      imageUrl: "/projects/chat.png",
    },
    {
      title: "Weather Dashboard",
      description:
        "Real-time weather information dashboard with 5-day forecast and location-based services.",
      technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation API"],
      githubLink: "https://github.com/Himanshu-coder007/task-1/tree/main/Wether-APP",
      demoLink: "https://weather-app-task1.netlify.app/",
      imageUrl: "/projects/weather.png",
    },
    {
      title: "Expense Manger",
      description:
        " Built a web-based expense tracking system where users can register, add income sources, and record daily expenses. Implemented automatic balance calculation and integrated interactive graphs to visualize monthly income and expense trends. Developed features to display recent transactions and monthly summaries, enabling users to efficiently monitor and manage their finances.",
      technologies: ["Reactjs","Firebase","Chart.js"],
      githubLink: "https://github.com/Himanshu-coder007/Expense-Tracker",
      demoLink: "https://expense-tracker-beta-murex.vercel.app/",
      imageUrl: "/projects/expensetracker.png",
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