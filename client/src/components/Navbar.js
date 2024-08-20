import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-green-400 p-4'>
        <div className='container mx-auto flex items-center'>
            <div className='flex-shrink-0'>
                <img src='' alt='' className='h-8 w-8'/>
            </div>
            <div className='ml-4 text-black text-xl font-semibold'>
                Task Manager
            </div>
        </div>

    </nav>
  )
}

export default Navbar;