import React from 'react'

const Layout = ({children,className=""}) => {
  return (
    <div className={`w-full h-full inl z-0 bg-lightImg p-32 ${className} dark:bg-darkImg xl:p-24 lg:p-16 md:p-12 sm:p-8`}>{children}</div>
  )
}

export default Layout