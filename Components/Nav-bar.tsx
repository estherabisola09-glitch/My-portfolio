import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>

        <div className='flex justify-start items-center gap-8 hover:text-secondary text-primary transition-all duration-300'>
            
      <Link href="/">Home</Link>
      <Link href="/about">About Me</Link>
      <Link href="/projects">Project</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/contact">Services</Link>

      

        </div>
    </div>
  )
}

export default Navbar