"use client";
import React, { forwardRef } from "react";
import Link from "next/link";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
// import styles from "../styles/Banner.module.css";

function HomePage({ id, title }, ref) {
  const onButtonClick = () => {
    fetch("/kruti kumbhani.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = fileURL;
        a.download = "Kruti_Kumbhani_CV.pdf";
        a.click();
      });
    });
  };

  return (
    <div className='flex items-center py-[45px] mb-[45px]'>
      <div className="container mx-auto">
        <div className='w-full flex justify-between items-center'>
          <div className='w-1/2 text-center'>
            <div>
              <div className="overflow-hidden relative h-[65px] pt-[10px] -mt-[10px] mb-[50px]">
                <ul className="{styles.flip5}">
                  <li className="font-serif text-[#eee] text-[40px] font-medium px-[10px] h-[45px] mb-[45px] block">नमस्ते</li>
                  <li className="font-serif text-[#eee] text-[40px] font-medium px-[10px] h-[45px] mb-[45px] block">Hello...</li>
                  <li className="font-serif text-[#eee] text-[40px] font-medium px-[10px] h-[45px] mb-[45px] block">Bonjour...</li>
                  <li className="font-serif text-[#eee] text-[40px] font-medium px-[10px] h-[45px] mb-[45px] block">أهلاً..</li>
                  <li className="font-serif text-[#eee] text-[40px] font-medium px-[10px] h-[45px] mb-[45px] block">Hi..</li>
                </ul>
              </div>
            </div>
            <div className='text-center flex flex-col gap-5'>
              <h1 className="text-[#18c5c5] text-7xl">I am Kruti...</h1>
              <span className="text-4xl text-[#9ca3af]">FULL stack Developer</span>
              <p className="text-[#9ca3af] ">
                I Am Self Learned, Passionate Coder with over 1.5 years of
                Experience. I Completed Many Freelance Projects As Well As
                Company Projects with Good Response And Desired Output. If you
                Are Seeking For A Good MERN Developer Then Your Search Is Over
                Now...
              </p>

              <div className='flex justify-center'>
                <ul>
                  <li className='mx-[10px] text-[#9ca3af] py-3 px-4 capitalize text-base bg-black rounded-[10px] shadow-[0_4px_6px_-1px_#fff,0_2px_4px_-2px_#fff] transition-all duration-500'>
                    <a href="#" onClick={onButtonClick}>Download CV</a>
                  </li>
                </ul>
                <ul>
                  <li className='mx-[10px] text-[#9ca3af] py-3 px-4 capitalize text-base bg-black rounded-[10px] shadow-[0_4px_6px_-1px_#fff,0_2px_4px_-2px_#fff] transition-all duration-500'>
                    <Link href="#contact">Contact Me</Link>
                  </li>
                </ul>
              </div>

              <div className='flex justify-center gap-2'>
                <ul className="flex justify-center gap-2">
                  <li className="">
                    <Link href="https://github.com/" target="_blank" className="text-[30px] text-[#18c5c5] mr-[9px]">
                      <FaGithub />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://linkedin.com/" target="_blank" className="text-[30px] text-[#18c5c5] mr-[9px]">
                      <CiLinkedin />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.instagram.com/itskrutikumbhani/" target="_blank" className="text-[30px] text-[#18c5c5] mr-[9px]">
                      <FaInstagram />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='w-1/2 photo'>
            <div className='w-[350px] mx-auto rounded-full overflow-hidden shadow-[0_0_50px_#18c5c5] animate-squareToCircle'>
              <img src="/image/002.jpg" alt="Kruti Kumbhani" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ✅ Wrap with forwardRef here
export default forwardRef(HomePage);
