import Layout from '@/components/Layout';
import Head from 'next/head';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ayush Deb | Portfolio</title>
        <meta name="description" content="Ayush Deb's personal portfolio showcasing skills and projects." />
      </Head>
      <main className="flex items-center justify-center min-h-screen text-white">
        <Layout className="pt-0 md:pt-16 sm:pt-8 ">
          <Hero /> {/* Use the Hero component here */}
        </Layout>
      </main>
    </>
  );
}
