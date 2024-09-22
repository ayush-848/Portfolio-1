import React from 'react'

const Layout = ({children,className=""}) => {
  return (
    <div className={`w-full h-full inl z-0 bg-lightImg p-32 ${className} dark:bg-darkImg`}>{children}</div>
  )
}

export default Layout