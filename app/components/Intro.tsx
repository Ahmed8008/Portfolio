"use client";
import React from 'react';
import {delay, motion} from "framer-motion";
import {links} from  "@/app/lib/data";
import Link from 'next/link';
import Image from 'next/image'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa6';
import { FaGithubSquare } from 'react-icons/fa';

export default function Intro()
{
    return(
        <section id='home' className= 'mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
        <div className='flex items-center justify-center' > 
            <div className='relative'>
                <motion.div

                    initial={{opacity: 0, scale: 0}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{type:"tween", duration:0.2, }}

                >
                   

            <Image
                src="/pic.png"
                 width="192"
                  height="192"
                  color='white'
                  priority={true}
                  className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'
                  alt="Ahmed Portfolio"
                 />
                 </motion.div>
                    <motion.span  className='absolute bottom-0 right-0 text-4xl' 
                        initial={{opacity:0, scale:0}}
                        animate={{opacity:1,scale:1}}
                        transition={{type:'spring', stiffness: 125, delay: 0.1, duration: 0.7,  }}
                    
                    >
                        👋

                     </motion.span>

            </div>
         </div>
         <motion.p className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
           initial={{opacity: 0, scale: 0}}
           animate={{opacity: 1, scale: 1}}
           transition={{type:"tween", duration:0.2, }}
         >
            <span className='font-bold'> Hello, I'm Ahmed Mahmood.
            </span> I'm a {""}

            <span className='font-bold'>full-stack
                Web developer with 4 years of experience
            </span>
            

         </motion.p>
            <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
                initial={{opacity: 0, y: 100}}
                animate={{opacity: 1, y: 1}}
                transition={{delay: 0.1, }}     


            >
                <Link href="#contact" className=' group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 
                rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 
                transition
                '> 
                Contact me here  <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" /> {""}
                  </Link>

                    <a className=' group bg-white  px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 
                       transition cursor-pointer text-black border-black/10 ' href='/Ahmed Resume.pdf' download>
                        Download Cv <HiDownload  className="opacity-60 group-hover:translate-y-1 transition"/>
                    </a>

                    <a className='bg-white  p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 
                       transition cursor-pointer border-black/10' href='https://www.linkedin.com/in/ahmed-mahmood-044911214/' target='_blank'  >
                        <BsLinkedin/>
                    </a>

                    <a className='bg-white  p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 
                       transition cursor-pointer border-black/10' href='https://github.com/Ahmed8008' target='_blank' >
                        <FaGithubSquare/>
                    </a>

            </motion.div>
    
        

       
        </section>


    )
}
