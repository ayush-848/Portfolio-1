import React, { useState, useEffect } from 'react';
import { motion, Reorder } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowsAlt } from 'react-icons/fa';

// Projects Data
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
    technologies: ["Vue.js", "Weather API", "Geolocation API"],
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
  const [items, setItems] = useState(projects);

  // Animation variants for the heading and project cards
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-16 mt-16" id="projects">
      <div className="max-w-4xl mx-auto px-2">
        {/* Animated Heading */}
        <motion.h2
          className="text-5xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.3 }} // Add a slight delay for the heading
          viewport={{ once: false, amount: 0.2 }} // Trigger when 20% of the heading is visible
        >
          My Projects
        </motion.h2>

        <Reorder.Group
          axis="y"
          values={items}
          onReorder={setItems}
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8"
          dragConstraints={false}
          dragElastic={1}
        >
          {items.map((project) => (
            <Reorder.Item
              key={project.id}
              value={project}
              className="cursor-grab"
              drag
              dragConstraints={false}
              dragElastic={1}
              whileDrag={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ listStyle: 'none', position: 'relative' }}
            >
              <motion.div
                className="rounded-lg overflow-hidden shadow-lg transition-all transform hover:scale-105 backdrop-filter backdrop-blur-md bg-opacity-50 dark:bg-opacity-30 md:w-3/4 "
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                layout
                initial="hidden"
                whileInView="visible"
                variants={cardVariants}
                viewport={{ once: false, amount: 0.2 }} // Trigger when 20% of the card is visible
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(5px)',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                  margin: '0 auto' // Center the card
                }}
              >
                <img src={project.image} alt={project.title} className="w-full h-44 object-cover sm:h-28" />
                <div className="p-4 sm:p-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 sm:text-lg">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-base text-gray-700 dark:text-gray-300 sm:text-sm">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-block text-gray-900 dark:text-gray-100 text-sm px-2 py-1 rounded-full sm:px-1 sm:py-0.5 sm:text-xs"
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
                      className="flex items-center bg-transparent border border-yellow-500 text-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-500 hover:text-white transition duration-200 ease-in-out sm:px-2 sm:py-1 sm:text-sm"
                    >
                      <FaGithub className="mr-1" />
                      View Code
                    </a>

                    <FaArrowsAlt className="text-gray-500 cursor-grab mx-4 text-xl" />

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-transparent border border-yellow-500 text-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-500 hover:text-white transition duration-200 ease-in-out sm:px-2 sm:py-1 sm:text-sm"
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
