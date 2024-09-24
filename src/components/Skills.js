import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

// Framer Motion Variants
const skillVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 100 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      type: 'spring',
      stiffness: 80,
      damping: 12,
    },
  }),
};

// Skills Data
const skills = [
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
];

const SkillTag = React.memo(({ skill, logo, index }) => {
  return (
    <motion.div
      className="flex items-center bg-white rounded-lg px-3 py-2 shadow-lg m-3 transition-all transform hover:scale-105 hover:shadow-xl"
      variants={skillVariants}
      custom={index}
      whileHover={{
        rotate: [0, 3, -3, 0],
        transition: {
          type: 'spring',
          stiffness: 300,
          damping: 10,
        },
      }}
      whileTap={{ scale: 0.95 }}
      role="button"
      aria-label={`Skill: ${skill}`} // Accessibility improvement
    >
      <Image 
        src={logo} 
        alt={`${skill} logo`} 
        className="w-6 h-6 mr-2" 
        width={24}
        height={24}
      />
      <span className="text-sm font-medium text-gray-800">{skill}</span>
    </motion.div>
  );
});

const Skills = () => {
  const controls = useAnimation();
  const headingControls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2, // Triggers when 20% of the section is in view
  });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
    headingControls.start(inView ? "visible" : "hidden");
  }, [controls, headingControls, inView]);

  return (
    <>
      <motion.h1 
        ref={ref}
        className='text-5xl font-bold text-center mb-12 text-dark dark:text-light'
        variants={{
          hidden: { opacity: 0, y: -50 }, // Start above
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              ease: 'easeOut',
            },
          },
        }}
        initial="hidden"
        animate={headingControls}
      >
        Tech Stacks I am Familiar With
      </motion.h1>
      
      <motion.div 
        className="flex flex-wrap justify-center items-center w-3/4 mx-auto py-10 px-4"
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          hidden: { opacity: 0 },
        }}
      >
        {skills.map((skill, index) => (
          <SkillTag key={index} skill={skill.name} logo={skill.logo} index={index} />
        ))}
      </motion.div>
    </>
  );
};

export default Skills;
