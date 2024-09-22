import React, { useState } from 'react';
import { motion, Reorder } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowsAlt } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management and secure payment processing.",
    image: "https://picsum.photos/seed/ecommerce/800/600",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    github: "https://github.com/yourusername/ecommerce-platform",
    live: "https://your-ecommerce-platform.com"
  },
  {
    id: 2,
    title: "Weather Forecast App",
    description: "A mobile-responsive web app that provides accurate weather forecasts using geolocation and third-party APIs.",
    image: "https://picsum.photos/seed/weather/800/600",
    technologies: ["Vue.js", "OpenWeatherMap API", "Geolocation API"],
    github: "https://github.com/yourusername/weather-forecast-app",
    live: "https://your-weather-app.com"
  },
  {
    id: 3,
    title: "Blog Platform",
    description: "A blogging platform where users can create, edit, and delete their posts. Features include user authentication and real-time commenting.",
    image: "https://picsum.photos/seed/blog/800/600",
    technologies: ["Next.js", "MongoDB", "Express", "Socket.IO"],
    github: "https://github.com/yourusername/blog-platform",
    live: "https://your-blog-platform.com"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my projects, skills, and contact information. Built with a modern design and responsive layout.",
    image: "https://picsum.photos/seed/portfolio/800/600",
    technologies: ["React", "Tailwind CSS", "Netlify"],
    github: "https://github.com/yourusername/portfolio-website",
    live: "https://your-portfolio-website.com"
  }
];

const Project = () => {
  const [items, setItems] = useState(projects); // Use the projects as the reorderable list

  return (
    <div className="py-16" id="projects">
      <div className="max-w-4xl mx-auto px-2">
        <h2 className="text-5xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
          My Projects
        </h2>
        {/* Reorder Group */}
        <Reorder.Group
          axis="y"
          values={items}
          onReorder={setItems}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          dragConstraints={false} // Removes drag boundaries
          dragElastic={1} // Maximum elasticity for free movement
        >
          {items.map((project) => (
            <Reorder.Item
              key={project.id}
              value={project}
              className="cursor-grab"
              drag
              dragConstraints={false} // No constraints, full freedom
              dragElastic={1} // Make the dragging completely elastic
              whileDrag={{ scale: 1.05 }} // Slight scaling effect while dragging
              transition={{ type: "spring", stiffness: 300, damping: 30 }} // Smooth motion
              style={{ listStyle: 'none', position: 'relative' }} // Prevent layout issues
            >
              <motion.div
                className="rounded-lg overflow-hidden shadow-lg transition-all transform hover:scale-105 backdrop-filter backdrop-blur-md bg-opacity-50 dark:bg-opacity-30"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                layout
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(5px)',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-block text-gray-900 dark:text-gray-100 text-sm px-2 py-1 rounded-full"
                        style={{
                          background: 'rgba(255, 215, 0, 0.1)',
                          border: '2px solid #FFD700',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-transparent border border-yellow-500 text-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-500 hover:text-white transition duration-200 ease-in-out"
                    >
                      <FaGithub className="mr-1" />
                      View Code
                    </a>
                    
                    {/* Drag icon for visual indication */}
                    <FaArrowsAlt className="text-gray-500 cursor-grab mx-4 text-xl" />
                    
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-transparent border border-yellow-500 text-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-500 hover:text-white transition duration-200 ease-in-out"
                    >
                      <FaExternalLinkAlt className="mr-1" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </div>
    </div>
  );
};

export default Project;
