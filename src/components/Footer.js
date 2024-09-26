import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid text-lg border-dark font-medium dark:border-light h-1/4'>
        <Layout className='!py-2 flex items-center justify-between'>
            <span className='text-dark dark:text-light h-1/5 w-full p-32 xl:p-20 lg:p-16 -z-1  md:p-12 sm:p-8 flex items-center justify-between lg:flex-col lg:py-6 md:text-xs'>{new Date().getFullYear()} &copy; All Rights Reserved
            <div className='flex items-center text-dark dark:text-light lg:py-2'>
                Build by &nbsp;<Link href="/" className='underline underline-offset-4'>Ayush Deb</Link>
            </div>
            <Link href="/" className='text-dark dark:text-light underline underline-offset-4'>Contact</Link></span>
        </Layout>
    </footer>
  )
}

export default Footer