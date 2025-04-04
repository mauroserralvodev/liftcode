import React from 'react'
import Link from 'next/link'

function Header() {
  return (
  <header className="fixed top-4 left-1/2 -translate-x-1/2 rounded-full w-[95%] max-w-7xl bg-black border border-neutral-800 z-50">
      <div className="px-6">
        <div className="flex items-center justify-between h-16">
          <Link href='/' className="flex items-center space-x-2">
            <img src="logo.png" className='w-36 sm:w-36' alt='Logo'/>
          </Link>
          
          <nav className="space-x-8 flex items-center ">
 
            {/* <a href='/news' className='mx-2 text-sm text-neutral-200 hover:text-neutral-400 transition font-medium'>News</a>
            <a href='/news' className='mx-2 text-sm text-neutral-200 hover:text-neutral-400 transition font-medium'>Components</a>
            <a href='/pricing' className='mx-2 text-sm text-neutral-200 hover:text-neutral-400 transition font-medium'>Pricing</a>
            <a href='/terms' className='mx-2 text-sm text-neutral-200 hover:text-neutral-400 transition font-medium'>Terms</a> */}

            <Link href='/chat'>
              <p className='text-sm text-white transition bg-neutral-800 hover:bg-[#0071E3] rounded-full py-2 px-3'>
                Get Started
              </p>
            </Link>
          </nav>
        </div>
      </div>
  </header>
  )
}

export default Header