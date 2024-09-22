import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import profile from '../../public/images/profile.png';

export default function Home() {
  const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <>
      <Head>
        <title>Ayush Deb | Portfolio</title>
        <meta name="description" content="Ayush Deb's personal portfolio showcasing skills and projects." />
      </Head>
      <main className="flex items-center justify-center min-h-screen text-white">
        <Layout className="pt-0">
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl p-8 -mt-8">
            {/* Profile Info */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0 ml-10">
              <motion.h1 
                className="text-6xl text-dark font-extrabold leading-tight mb-4 dark:text-light"
                variants={headingVariants}
                initial="hidden"
                animate="visible"
              >
                {("Hi, I'm ").split('').map((char, index) => (
                  <motion.span key={index} variants={letterVariants}>
                    {char}
                  </motion.span>
                ))}
                <motion.span 
                  className="text-yellow-500 dark:text-yellow-300"
                  variants={letterVariants}
                >
                  Ayush
                </motion.span>
              </motion.h1>
              <motion.p 
                className="text-[24px] text-dark mt-2 w-full font-medium dark:text-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Web Developer & Software Engineer
              </motion.p>
              <p className="text-lg mt-4 text-dark dark:text-light">
                I specialize in building modern, high-performance web applications with a strong focus on user experience and functionality.
              </p>

              {/* Call to Action Buttons */}
              <div className="mt-8 flex space-x-4">
                <motion.a
                  href="/resume.pdf"
                  target="_blank"
                  className="bg-yellow-400 text-gray-800 py-3 px-6 rounded-md text-lg font-medium hover:bg-yellow-300 transition duration-300 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  View My Resume
                </motion.a>
                <motion.a
                  href="#work"
                  className="bg-transparent border-2 border-white text-dark py-3 px-6 rounded-md text-lg font-medium hover:bg-white hover:text-gray-800 transition duration-300 shadow-lg dark:text-white"
                  whileHover={{ scale: 1.05 }}
                >
                  See My Work
                </motion.a>
              </div>
            </div>

            {/* Profile Picture */}
            <motion.div
              className="w-1/3 relative"
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
                className="w-full h-auto rounded-full shadow-xl"
              />
            </motion.div>
          </div>
        </Layout>
      </main>
    </>
  );
}