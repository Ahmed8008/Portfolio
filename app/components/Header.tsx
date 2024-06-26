"use client";
import React from 'react';
import {motion} from "framer-motion";
import {links} from  "@/app/lib/data";
import Link from 'next/link';

export default function Header()
{
    return <header className='z-[999] relative ' > 
    <motion.div className='fixed top-0 left-1/2  -translate-x-1/2 h-[4.5rem] w-full
    rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]
    sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full' 
    initial={{y:-100, x: "-50%", opacity:0}}
    animate={{y:0,x: "-50%" , opacity:1}}
    
    >  </motion.div>

        <nav className=' fixed top-[0.15rem] left-1/2 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[intial] sm:py-0 '>
            
            <ul className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] front-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5'>
         
            <motion.li className='h-3/4 flex items-center justify-center' initial={{y: -100, opacity: 0}} animate={{y: 0, opacity: 1}} >
            <Link href="#home">
      <div className='flex w-full items-center justify-center px-3 py-3 hover:bg-gray-500 text-black rounded-full active:hover:to-black'>Home</div>
    </Link>
            <Link href="#about"> <div className='flex w-full items-center justify-center px-3 py-3 hover:bg-gray-500 text-black  
                rounded-full' > About </div></Link>
            <Link className='flex w-full items-center justify-center px-3 py-3 hover:bg-gray-500 text-black  
                rounded-full' href="#projects"> Projects</Link>
            <Link className='flex w-full items-center justify-center px-3 py-3 hover:bg-gray-500 text-black  
                rounded-full' href="#skills"> Skills</Link>
            <Link className='flex w-full items-center justify-center px-3 py-3 hover:bg-gray-500 text-black  
                rounded-full' href="#experience"> Reviews</Link>
            <Link className='flex w-full items-center justify-center px-3 py-3 hover:bg-gray-500 text-black  
                rounded-full' href="#contact"> Contact</Link>
            </motion.li>
            </ul>

        </nav>

    </header>    
}


