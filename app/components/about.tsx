'use client'
import React from 'react';
import {delay, motion} from "framer-motion";

export default function About(){
    return <motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
    initial={{opacity: 0, y:100}}
    animate={{opacity: 1, y:0}}
    transition={{dealy: 0.175}}
    id="about"
    >
        <h2 className='text-3xl font-medium capitalize mb-8'>
               About me
            </h2> 
        <p className='mb-3 '>

    
        </p>

        <p className=' text-2xl'>
       <i> Throughout my journey in web development, I have successfully translated clients' visions into fully functional websites, ensuring a seamless and engaging user experience. My commitment to staying updated with the latest industry trends and technologies allows me to deliver cutting-edge solutions.
       In addition to my technical skills, I thrive in collaborative environments, fostering effective communication and teamwork. I believe in the power of clean and maintainable code to build scalable applications that stand the test of time.
       Whether it's designing intuitive user interfaces, implementing complex backend logic, or optimizing performance, I approach each project with dedication and a problem-solving mindset. I am excited about the endless possibilities that web development offers and look forward to contributing my skills to innovative and impactful projects.
       </i>

        </p>
    </motion.section>

}

