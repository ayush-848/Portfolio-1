import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const Contact = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const [textColor, setTextColor] = useState('white'); // Default to white for light mode

  useEffect(() => {
      const updateTextColor = () => {
          if (document.documentElement.classList.contains('dark')) {
              setTextColor('white'); // Dark mode: black text
          } else {
              setTextColor('black'); // Light mode: white text
          }
      };

      // Initial check
      updateTextColor();

      // Listen for changes in the class
      const observer = new MutationObserver(updateTextColor);
      observer.observe(document.documentElement, {
          attributes: true,
          attributeFilter: ['class']
      });

      return () => observer.disconnect();
  }, []);
 

  return (
    <>
      {/* Contact Button with Rotating Text */}
      <div className="fixed bottom-14 left-6 md:right-8 md:left-auto md:top-0 md:bottom-auto">
        <div className="relative w-32 h-32 md:h-24 md:w-24"> {/* Increased container size */}
          {/* Rotating text */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                id="circlePath"
                d="M 50, 50 m -42, 0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0"
                fill="none"
              />
              <text fill={textColor} fontSize="12" fontWeight="500" letterSpacing="0.8" className='md:hidden'>
                <textPath href="#circlePath" startOffset="0%">
                  Web Developer • Software Developer • Web Developer • Software Developer •
                </textPath>
              </text>
            </svg>
          </motion.div>

          {/* Circular Button */}
          <motion.button
  className="absolute inset-0 m-auto bg-black text-white rounded-full w-20 h-20 font-bold flex flex-col items-center justify-center cursor-pointer dark:bg-slate-300 md:w-16 md:h-16"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={toggleModal}
>
  <div className='dark:text-dark'>
  <p className='leading-tight mt-2 md:text-sm md:leading-none'>Contact</p>
  <span className='md:text-sm'>Me</span>
  </div>
</motion.button>

        </div>
      </div>

      {/* Modal for Contact Form */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg p-6 w-96"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
              <form className="space-y-4">
                <div>
                  {/* Non-editable To: Label */}
                  <div className="block text-gray-700 text-sm font-bold mb-2">
                    To: <span className="font-medium underline underline-offset-4">ayushdeb848@gmail.com</span>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                    id="name"
                    type="text"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                    id="email"
                    type="email"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                    id="message"
                    placeholder="Your message"
                    rows="4"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <motion.button
                    className="bg-black text-white font-bold py-2 px-4 rounded"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                  >
                    Send Message
                  </motion.button>
                  <motion.button
                    className="text-black font-bold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleModal}
                    type="button"
                  >
                    Close
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Contact;
