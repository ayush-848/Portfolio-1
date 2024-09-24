import React, { useState, useEffect } from 'react';
import { motion, Reorder } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowsAlt } from 'react-icons/fa';
import LazyLoad from 'react-lazyload';

const projects = [
  {
    id: 1,
    title: "MyDay",
    description: "A full-stack e-commerce solution with real-time inventory management and secure payment processing.",
    image: "../../images/projects/m.png",
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "Ejs"],
    github: "https://github.com/ayush-848/MyDay",
    live: "https://myday-gklz.onrender.com/"
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
    title: "PixelCraft",
    description: "A blogging platform where users can create, edit, and delete their posts. Features include user authentication and real-time commenting.",
    image: "../../images/projects/pixelcraft.png",
    technologies: ["Next.js", "MongoDB", "Cloudinary API", "Clerk", "Stripe"],
    github: "https://github.com/ayush-848/Pixel_Craft",
    live: "https://pixelcraft-blush.vercel.app/"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my projects, skills, and contact information. Built with a modern design and responsive layout.",
    image: "../../images/projects/portfolio_1.png",
    technologies: ["Next Js", "Tailwind CSS", "Framer", "React icons"],
    github: "https://github.com/ayush-848/Portfolio-1",
    live: "https://portfolio-1-eta-six.vercel.app/"
  }
];

const Project = () => {
  const [items, setItems] = useState(projects);
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  // Detect the screen size
  useEffect(() => {
    const updateScreenSize = () => {
      const screenWidth = window.innerWidth;
      setIsLargeScreen(screenWidth >= 1024); // Only enable animations for xl and larger screens
    };

    updateScreenSize(); // Call on mount
    window.addEventListener("resize", updateScreenSize);

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  return (
    <div className="py-16" id="projects">
      <div className="max-w-4xl mx-auto px-2">
        {/* Heading without animation for smaller screens */}
        <h2
          className={`text-5xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100 ${isLargeScreen ? 'animate-fade' : ''}`}
        >
          My Projects
        </h2>

        <Reorder.Group
          axis="y"
          values={items}
          onReorder={setItems}
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8"
          drag={isLargeScreen} // Enable drag only for extra-large screens and above
        >
          {items.map((project) => (
            <Reorder.Item
              key={project.id}
              value={project}
              className="cursor-grab"
              drag={isLargeScreen} // Enable drag only for large screens
              style={{ listStyle: 'none', position: 'relative' }}
            >
              <motion.div
                className={`rounded-lg overflow-hidden shadow-lg transition-all transform ${isLargeScreen ? 'hover:scale-105' : ''} backdrop-filter backdrop-blur-md bg-opacity-50 dark:bg-opacity-30 md:w-3/4`}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(5px)',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                  margin: '0 auto' // Center the card
                }}
              >
                <LazyLoad>
                  <Image src={project.image} alt={project.title} className="w-full h-56 object-cover sm:h-28" loading='lazy' />
                </LazyLoad>
                <div className="p-4 sm:p-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 sm:text-lg">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-base text-gray-700 dark:text-gray-300 sm:text-sm leading-tight">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 h-6 mb-12">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-block text-gray-900 dark:text-gray-100 text-sm px-2 py-0.5 rounded-full sm:px-1 sm:py-0.5 sm:text-xs"
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
                      className="flex items-center bg-transparent border border-yellow-500 text-yellow-500 px-4 py-1 rounded-lg hover:bg-yellow-500 hover:text-white transition duration-200 ease-in-out sm:px-2 sm:py-1 sm:text-sm"
                    >
                      <FaGithub className="mr-1" />
                      View Code
                    </a>

                    {isLargeScreen && (
                      <FaArrowsAlt className="text-gray-500 cursor-grab mx-4 text-xl" />
                    )}

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-transparent border border-yellow-500 text-yellow-500 px-4 py-1 rounded-lg hover:bg-yellow-500 hover:text-white transition duration-200 ease-in-out sm:px-2 sm:py-1 sm:text-sm"
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
