import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import '@/styles/globals.css';
import { Montserrat } from 'next/font/google';
import Head from 'next/head';
import Skills from '@/components/Skills';
import Project from '@/components/Project';

const montserrat = Montserrat({
  subsets: ["latin"],
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  return (
    <div className='bg-lightImg dark:bg-darkImg'>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${montserrat.className} bg-lightImg w-full min-h-screen text-black relative dark:bg-darkImg`}>
        <Navbar />
        <Component {...pageProps} />
        <Contact />
        <Skills />
        <Project/>
        <Footer />
      </main>
    </div>
  );
}
