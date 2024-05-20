import React from 'react'
import { useState } from 'react';
import logo from '../assets/ailogo.png'
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

import { Link } from "react-router-dom";
import { styles } from '../styles';
const Footer = () =>  {
  const [active, setActive] = useState("");
  return (
   
    <div className=''>
          <div className="text-[20px] ml-[10%] md:text-[35px] flex justify-center gap-5  items-center md:mt-10 mt-5 md:gap-12 ">
              <Link
                target="_blank"
                to="www.twitter.com"
              > 

                <BsTwitter className=" mb-20 mr-2 hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100 -md:mr-0 -md:my-[1px]" />
              </Link>

              <Link target="_blank" to="https://github.com/Mohityadav3036">
                <BsGithub className=" mb-20 mx-2 hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100 -md:mx-0 -md:my-[1px]" />
              </Link>
              
              <Link target="_blank" to="https://www.linkedin.com/in/mohit-yadav-33811024a/">
                <BsLinkedin className=" mb-20 ml-2 hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100 -md:ml-0 -md:my-[1px]  " />
              </Link>
              <Link target="_blank" to="https://discord.com/channels/@me">
                <BsDiscord className=" mb-20 mx-4 hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100 -md:mx-0 -md:my-[1px]" />
              </Link>

              <Link
                target="_blank"
                to="https://www.instagram.com/mohit3379yadav/"
              >
                <BsInstagram className=" mb-20 mx-2 hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100 -md:mx-0 -md:my-[1px]" />
              </Link>
            </div>
            <Link
          to="/"
        className={`${styles.heroSubText} flex justify-center items-center`}
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
            <div className={`${styles.heroSubText} flex justify-center items-center`}>
            <img src={logo} alt="logo" className='w-[80px] mb-10 flex justify-center items-center' />
            <div className='mt-7 ml-4'>
                <h1 className='-mt-8 mb-10 flex justify-center items-center'> Mohit Yadav ❤️ &copy; 2024 </h1>
            </div>
            </div>
            </Link>
            
    </div>
  )
}

export default Footer
