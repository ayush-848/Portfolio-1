import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { useRouter } from 'next/router';
import { DribbbleIcon, GithubIcon, LinkedInIcon, MediumIcon, MoonIcon, SunIcon, TwitterIcon } from './Icons';
import { motion } from 'framer-motion';
import useThemeSwitcher from '@/hooks/useThemeSwitcher';

const CustomLink = ({ href, title, className = '' }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} group relative`}>
      {title}
      <span className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full translate-[width] ease duration-300
        ${router.asPath === href ? 'w-full bg-slate-400' : 'w-0'}
        dark:bg-light`}></span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = '', toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
    toggle(); // Call toggle here when the link is clicked
  };

  return (
    <button className={`${className} group relative text-light dark:text-dark my-2`} onClick={handleClick}>
      {title}
      <span className={`h-[2px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full translate-[width] ease duration-300
        ${router.asPath === href ? 'w-full bg-slate-400' : 'w-0'}
        dark:bg-dark`}></span>
    </button>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [textColor, setTextColor] = useState('black');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const updateTextColor = () => {
      setTextColor(document.documentElement.classList.contains('dark') ? 'white' : 'black');
    };

    updateTextColor();
    const observer = new MutationObserver(updateTextColor);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    setIsOpen((prev) => !prev); // Toggle the state
  };

  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light'>
      <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
        <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-0.5'} transition duration-300 ease-out`}></span>
        <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm ${isOpen ? 'opacity-0' : 'opacity-100'} transition duration-100 ease-out`}></span>
        <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-0.5'} transition duration-300 ease-out`}></span>
      </button>

      <div className='w-full flex justify-between items-center lg:hidden'>
        <nav>
          <CustomLink href="/" title="Home" className='mr-2' />
          <CustomLink href="/about" title="About" className='mx-3' />
          <CustomLink href="/#projects" title="Projects" className='mx-3' />
          <CustomLink href="/articles" title="Articles" className='mx-3' />
        </nav>
        <nav className='flex items-center justify-between flex-wrap'>
          <motion.a href="/" target="_blank" whileHover={{ y: -2 }} className='w-6 mr-3' whileTap={{ scale: 0.9 }}>
            <TwitterIcon />
          </motion.a>
          <motion.a href="/" target="_blank" whileHover={{ y: -2 }} className='w-6 mx-3' whileTap={{ scale: 0.9 }}>
            <GithubIcon />
          </motion.a>
          <motion.a href="/" target="_blank" whileHover={{ y: -2 }} className='w-6 mx-3' whileTap={{ scale: 0.9 }}>
            <MediumIcon fill={textColor} />
          </motion.a>
          <motion.a href="/" target="_blank" whileHover={{ y: -2 }} className='w-6 mx-3' whileTap={{ scale: 0.9 }}>
            <LinkedInIcon />
          </motion.a>
          <motion.a href="/" target="_blank" whileHover={{ y: -2 }} className='w-6 ml-3' whileTap={{ scale: 0.9 }}>
            <DribbbleIcon />
          </motion.a>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
          >
            {mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />}
          </button>
        </nav>
      </div>

      {isOpen && (
        <motion.div 
        initial={{scale:0, opacity:0, x:"-50%", y:"-50%"}}
        animate={{scale:1, opacity:1}}
        className='min-w-[70vw] flex justify-between items-center flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 z-30'>
          <nav className='flex items-center flex-col justify-center'>
            <CustomMobileLink href="/" title="Home" className='' toggle={handleClick} />
            <CustomMobileLink href="/about" title="About" className='' toggle={handleClick} />
            <CustomMobileLink href="/#projects" title="Projects" className='' toggle={handleClick} />
            <CustomMobileLink href="/articles" title="Articles" className='' toggle={handleClick} />
          </nav>
          <nav className='flex items-center justify-between flex-wrap mt-2'>
            <motion.a href="/" target="_blank" whileHover={{ y: -2 }} className='w-6 mr-3 sm:mx-1' whileTap={{ scale: 0.9 }}>
              <TwitterIcon />
            </motion.a>
            <motion.a href="/" target="_blank" whileHover={{ y: -2 }} className='w-6 mx-3 sm:mx-1 bg-light rounded-full dark:bg-dark' whileTap={{ scale: 0.9 }}>
              <GithubIcon />
            </motion.a>
            <motion.a href="/" target="_blank" whileHover={{ y: -2 }} className='w-6 mx-3 sm:mx-1 bg-light rounded-full dark:bg-dark' whileTap={{ scale: 0.9 }}>
              <MediumIcon fill={textColor} />
            </motion.a>
            <motion.a href="/" target="_blank" whileHover={{ y: -2 }} className='w-6 mx-3 sm:mx-1' whileTap={{ scale: 0.9 }}>
              <LinkedInIcon />
            </motion.a>
            <motion.a href="/" target="_blank" whileHover={{ y: -2 }} className='w-6 ml-3 sm:mx-1' whileTap={{ scale: 0.9 }}>
              <DribbbleIcon />
            </motion.a>

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
            >
              {mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />}
            </button>
          </nav>
        </motion.div>
      )}

      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
