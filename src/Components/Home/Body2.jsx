/* eslint-disable no-unused-vars */
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import TechnicalSkills from "./TechnicalSkills";

function Body2() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <>
    <section id="skills">
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col-reverse md:flex-row custom-background ">
        <div className="w-full order-1 md:w-1/2" data-aos="fade-right">
          <img src="images/skills.png" className="w-5/6 h-5/6 mt-5 m-15 " alt="#" />{" "}
        </div>
        <div
          className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-30 "
          data-aos="fade-left"
        >
          <div className="space-y-12 mr-4 mt-10 ">
            <div class="container mx-auto p-4">
              <TechnicalSkills/>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Body2;
