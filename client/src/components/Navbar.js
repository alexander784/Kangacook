import React from 'react';
import Task from "../assets/Task.png";

const Navbar = () => {
  return (
    <nav className='bg-green-400 p-4'>
        <div className='container mx-auto flex items-center'>
            <div className='flex-shrink-0'>
                <img src={Task} alt='' className='h-10 w-10 rounded-xl'/>
            </div>
            <div className='ml-4 text-black text-xl font-semibold'>
                Task Manager
            </div>
        </div>

    </nav>
  )
}

export default Navbar;