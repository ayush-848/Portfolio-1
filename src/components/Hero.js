import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import profile from '../../public/images/profile.png';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Hi, I'm Ayush";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prevText => prevText + fullText[index]);
        setIndex(prevIndex => prevIndex + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  const getCharColor = (char, index) => {
    const ayushStartIndex = fullText.indexOf('Ayush');
    return index >= ayushStartIndex ? "text-yellow-500 dark:text-yellow-300" : "";
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl p-4 -mt-20 sm:p-0">
      <div className='flex items-center justify-between w-full lg:flex-col-reverse'>
        {/* Profile Info */}
        <div className="w-full  mb-8 md:mb-0 ml-10 lg:text-center">
          <h1 className="text-6xl text-dark font-extrabold leading-tight mb-4 dark:text-light xl:!text-6xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-5xl">
            {text.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className={getCharColor(char, i)}
              >
                {char}
              </motion.span>
            ))}
          </h1>
          <motion.p
            className="text-dark mt-2 w-full font-medium dark:text-light xl:!text-3xl lg:!text-center lg:!text-4xl md:!text-3xl sm:!text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            Web Developer & Software Engineer
          </motion.p>
          <p className="text-lg mt-4 text-dark dark:text-light sm:text-base w-full ">
            I specialize in building modern, high-performance web applications with a strong focus on user experience and functionality.
          </p>

          {/* Call to Action Buttons */}
          <div className="mt-8 flex space-x-4 lg:space-x-4 sm:py-1 ml-0 self-start lg:justify-center">
            <motion.a
              href="https://drive.google.com/file/d/1JA-tWTNfHJocAkxssHZ1ZbUrqmfgY778/view?usp=drive_link"
              target="_blank"
              className="bg-yellow-400 text-gray-800 py-2 px-4 rounded-md text-lg font-medium hover:bg-yellow-300 transition duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              View My Resume
            </motion.a>
            <motion.a
              href="#projects"
              className="bg-transparent border-2 border-white text-dark py-2 px-4 rounded-md text-lg font-medium hover:bg-white hover:text-gray-800 transition duration-300 shadow-lg dark:text-white"
              whileHover={{ scale: 1.05 }}
            >
              See My Work
            </motion.a>
          </div>
        </div>

        {/* Profile Picture */}
        <motion.div
          className="w-7/12 relative -mt-12 lg:block xl:block sm:block md:block md:w-6/12 md:mb-6 sm:w-10/12 md:mt-20 md:ml-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-white shadow-lg"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
          />
          <Image
            src={profile}
            alt="Ayush"
            className="rounded-full shadow-xl md:inline-block md:w-full"
            priority
            width={500}
            height={500}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;