import React from "react";
import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas"
import logo from "../assets/ailogo.png";
import hoverlogo from '../assets/my.png'

import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

import { Link } from "react-router-dom";

const Hero = () => {

  const [text, count] = useTypewriter({
    words: [
      "I'm Web Developer",
      "Creative Problem Solver",
      "Lifelong Learner",
      "JavaScript Ninja",
      "React Wizard",
      "Innovative Thinker",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 1000,
  });
  return (
   
    <section className="relative   w-full h-screen mx-auto">
     <div className=" flex flex-col">
        <div
          className={`${styles.paddingX} mt-[200px] sm:mt-2 absolute inset-0 top-[120px] max-w-7xl max-auto flex flex-col items-start gap-5`}
        >
          <div className="flex flex-row">
            <div className="flex flex-col items-center mt-5 mr-8">
              <div className="w-5 h-5 rounded-full bg-[#9a0ec5]" />
              <div className="w-1 sm:h-80 h-40 violet-gradient"/>
            </div>
            <div>
              <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm </h1>
              <h1 className={`${styles.heroHeadText} text-white mt-[20px]`}>
              <span className=" animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">Mohit Yadav</span></h1>
              {/* <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                I develop 3D visuals, <br className="sm:block hidden"/> user interfaces and web applications
              </p> */}
              <p
                    className={`${styles.heroSubText} mt-5 text-white-100 max-w-lg`}
                  >
                    {text}
                    <Cursor cursorColor="#915eff" />
                  </p>
              
            </div>
            </div>


            {/* scrooling button */}

            
  
            
            
            {/* social media */}
            <div className="text-[20px] ml-[10%] md:text-[35px] flex justify-center gap-5  items-center md:mt-10 mt-5 md:gap-12   ">
              <Link
                target="_blank"
                to="www.twitter.com"
              > 

                <BsTwitter className="  mr-2 hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100 -md:mr-0 -md:my-[1px]" />
              </Link>

              <Link target="_blank" to="https://github.com/Mohityadav3036">
                <BsGithub className="mx-2 hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100 -md:mx-0 -md:my-[1px]" />
              </Link>
              
              <Link target="_blank" to="https://www.linkedin.com/in/mohit-yadav-33811024a/">
                <BsLinkedin className="ml-2 hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100 -md:ml-0 -md:my-[1px]  " />
              </Link>
              <Link target="_blank" to="https://discord.com/channels/@me">
                <BsDiscord className="mx-4 hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100 -md:mx-0 -md:my-[1px]" />
              </Link>

              <Link
                target="_blank"
                to="https://www.instagram.com/mohit3379yadav/"
              >
                <BsInstagram className="mx-2 hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100 -md:mx-0 -md:my-[1px]" />
              </Link>
            </div>
            
        
            <div className="flex ml-[10%]">
              <a
                href="#about"
                className="  w-fit mx-auto flex items-center justify-center gap-6 bg-tertiary lg:px-7 lg:py-3 px-4 py-2 rounded-xl lg:mt-10 mt-5 cursor-pointer max-[350px]:hidden select-none"
              >
                <div className=" group border-[3px] border-white rounded-full md:h-12 h-10 w-7 flex justify-center lg:scale-100 scale-75">
                  <div className="bg-white h-3 w-1 rounded-full mt-[10px] animate-bounce lg:scale-100 scale-75"></div>
                </div>

                <p className=" ">
                  {/* <span className="faulty-letter">Down</span><span className=" glowing-txt">Scroll</span> */}
                
               
                  Scroll Down
                </p>
              </a>
            </div>
          
          {/* <ComputersCanvas/> */}
          {/* FOR IMAGE LOGO BOTH AI AND SLEF */}
        </div>

         {/* images on right sidee AI + Self */}

          <div   className={`${styles.paddingX} mt-[120px] w-[220px] justify-center    inset-0 top-[120px] max-w-7xl  flex flex-row items-start gap-5 group`}>
            <img src={logo} alt="" className=" border-0 group-hover:hidden" />
            <img src={hoverlogo} alt="" className="shadow-2xl rounded-lg shadow-white border-0 hidden group-hover:block" />
           
          </div>
         
          <div className={`${styles.paddingX}  w-[600px] mt-[200px] sm:ml-[50%] hidden sm:block absolute group`}>
                <img src={logo} alt="" className="sm:block group-hover:hidden" />
                <img src={hoverlogo} alt="" className="shadow-2xl rounded-lg shadow-white hidden group-hover:block" />
          </div>

        </div>

    </section>
  );
};

export default Hero;
