import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid text-lg border-dark font-medium dark:border-light'>
        <Layout className='!py-6 flex items-center justify-between'>
            <span className='text-dark dark:text-light'>{new Date().getFullYear()} &copy; All Rights Reserved</span>
            <div className='flex items-center text-dark dark:text-light'>
                Build by &nbsp;<Link href="/" className='underline underline-offset-4'>Ayush Deb</Link>
            </div>
            <Link href="/" className='text-dark dark:text-light'>Contact</Link>
        </Layout>
    </footer>
  )
}

export default Footer