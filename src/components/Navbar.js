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
        dark:bg-light`}
      >&nbsp;</span>
    </Link>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [textColor, setTextColor] = useState('black');
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  return (
    <header className='w-full px-4 py-4 font-medium flex items-center justify-between dark:text-light relative'>
      <div className='flex items-center justify-between w-full'>
        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
          <Logo />
        </div>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden flex flex-col items-center justify-center w-8 h-8'
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className='block w-full h-1 bg-dark dark:bg-light mb-1'></span>
          <span className='block w-full h-1 bg-dark dark:bg-light mb-1'></span>
          <span className='block w-full h-1 bg-dark dark:bg-light'></span>
        </button>

        {/* Navigation Links */}
        <nav className={`hidden md:flex md:flex-row md:items-center`}>
          <CustomLink href="/" title="Home" className='mr-2' />
          <CustomLink href="/about" title="About" className='mx-3' />
          <CustomLink href="/#projects" title="Projects" className='mx-3' />
          <CustomLink href="/articles" title="Articles" className='mx-3' />
        </nav>

        <nav className='flex items-center justify-between flex-wrap'>
          {/* Social Icons */}
          <motion.a href="/" target={"_blank"} whileHover={{ y: -2 }} className='w-6 mx-3' whileTap={{ scale: 0.9 }}>
            <TwitterIcon />
          </motion.a>
          <motion.a href="/" target={"_blank"} whileHover={{ y: -2 }} className='w-6 mx-3' whileTap={{ scale: 0.9 }}>
            <GithubIcon />
          </motion.a>
          <motion.a href="/" target={"_blank"} whileHover={{ y: -2 }} className='w-6 mx-3' whileTap={{ scale: 0.9 }}>
            <MediumIcon fill={textColor} />
          </motion.a>
          <motion.a href="/" target={"_blank"} whileHover={{ y: -2 }} className='w-6 mx-3' whileTap={{ scale: 0.9 }}>
            <LinkedInIcon />
          </motion.a>
          <motion.a href="/" target={"_blank"} whileHover={{ y: -2 }} className='w-6 ml-3' whileTap={{ scale: 0.9 }}>
            <DribbbleIcon />
          </motion.a>

          {/* Theme Toggle Button */}
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
          >
            {mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Display */}
      {isMobileMenuOpen && (
        <nav className='absolute left-0 top-full bg-white dark:bg-gray-800 w-full shadow-lg z-10'>
          <div className='flex flex-col'>
            <CustomLink href="/" title="Home" className='my-2 px-4 py-2' />
            <CustomLink href="/about" title="About" className='my-2 px-4 py-2' />
            <CustomLink href="/#projects" title="Projects" className='my-2 px-4 py-2' />
            <CustomLink href="/articles" title="Articles" className='my-2 px-4 py-2' />
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
