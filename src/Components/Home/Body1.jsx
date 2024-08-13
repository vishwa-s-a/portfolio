/* eslint-disable no-unused-vars */
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Body1() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col-reverse md:flex-row custom-background ">
        <div
          className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-30  "
          data-aos="fade-right"
        >
          <div className="space-y-12 mr-4 mt-10 ">
            <h2 className="try text-3xl font-bold ">
            👋 Hello,
            </h2>
            <p className="try" >
            I'm a Computer Science Engineering student from VIT Vellore, passionate about using technology to solve complex problems and make a positive impact on the world. 
            Throughout my coursework, I have gained a strong foundation in programming, algorithms, and data structures, as well as experience with a variety of programming languages and tools.<br></br>
            In addition to my technical skills, I possess strong critical thinking, problem-solving, and analytical abilities.
            </p>
          </div>
        </div>
        <div className="w-full order-1 md:w-1/2 mr-5 mt-10" data-aos="fade-left">
          <img src="images/homePage.png" className="rel " alt="#" />{" "}
        </div>
      </div>
    </>
  );
}

export default Body1;
