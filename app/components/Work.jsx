"use client";
import { useTheme } from "../components/ThemeProvider";
import { assets, workData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"

const Work = () => {

    // taking out is darkmode
    const { isDarkMode, setIsDarkMode } = useTheme();


    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='exp' className='w-full max-w-full py-10 px-4 sm:px-8 md:px-[12%] scroll-mt-20'>

            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg font-ovo'>My Latest work</motion.h4>

            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-5xl font-ovo'>Work Experience</motion.h2>

            <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
                I have done Cisco Virtual Internship, where I gained foundational knowledge in networking, cybersecurity, and real-world tech applications through interactive modules. I also took part in two hackathons, where I built SheSkills, a web platform focused on empowering women in tech by offering curated resources and community support, and contributed to another innovative project tackling real-life challenges. Currently, I am working as a Frontend Development Intern at Governsafe, a civic-tech startup, where I’m building responsive and user-friendly interfaces using React.js and Tailwind CSS, while actively contributing to feature implementation and UI improvements.


            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className={`grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] my-10 gap-5 ${isDarkMode ? "text-black" : ""}`}>
                {workData.map((projects, index) => (
                    <motion.div
                        whileHover={{ scale:1.05 }}
                        transition={{ duration: 0.3 }}
                        className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
                        key={index} style={{ backgroundImage: `url(${projects.bgImage})` }}>
                        <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between
                         duration-500 group-hover:bottom-7'>
                            <div className=''>
                                <h2 className='font-semibold'>{projects.title}</h2>
                                <p className='text-sm text-gray-700'>{projects.description}</p>
                            </div>
                            <a href={projects.link} target="_blank" rel="noopener noreferrer">
                            <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                                <Image src={assets.send_icon} alt='' className='w-5' />
                            </div>
                            </a>
                        </div>

                    </motion.div>
                ))}
            </motion.div>


        </motion.div>
    )
}

export default Work