// eslint-disable-next-line no-unused-vars
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Project() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <>
      <section id="projects">
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 md:flex-row">
        <h1 className=" teamHead text-7xl mb-4" data-aos="fade-up">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 " data-aos="fade-up">
          <div className="mt-4 m-3 " >
            <div className="card w-92 p-5 hover:scale-105 duration-200 dark:border  ">
              <figure class="w-4/6 m-auto">
                <img src="images/zipkart-logo.png" alt="img" class="w-full h-auto"/>
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl">Zipkart</h2>
                <p>A Dynamic E-commerce Full-stack Website, built using php in back-end, MySQL RDBMS</p>
                <a href="https://github.com/vishwa-s-a/zipkart/tree/main"><h1 className="text-1xl font-bold">Know more</h1></a>
                <div className="card-actions justify-between"></div>
              </div>
            </div>
          </div>
          <div className="mt-4 m-3">
            <div className="card w-92 p-5 hover:scale-105 duration-200 dark:border  ">
              <figure class="w-4/6 m-auto">
                <img src="images/weighbridge.png" alt="img" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">SMART-TICKET BUILDER</h2>
                <p>A Hybrid Desktop Application, Built using electron,nodejs. Operates on Microsoft Access DB</p>
                <a href="https://github.com/vishwa-s-a/weighbridge/tree/main"><h1 className="text-1xl font-bold">Know more</h1></a>
                <div className="card-actions justify-between"></div>
              </div>
            </div>
          </div>
          <div className="mt-4 m-3">
            <div className="card w-92 p-5 hover:scale-105 duration-200 dark:border  ">
              <figure class="w-4/6 m-auto">
                <img src="images/nodejs.png" alt="img" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Appaji Books</h2>
                <p>Full-stack website built using nodejs and MySQL database for storing transaction details</p>
                <a href="https://github.com/vishwa-s-a/appaji-books"><h1 className="text-1xl font-bold">Know more</h1></a>
                <div className="card-actions justify-between"></div>
              </div>
            </div>
          </div>
          <div className="mt-4 m-3">
            <div className="card w-92 p-5 hover:scale-105 duration-200 dark:border  ">
              <figure class="w-3/6 m-auto">
                <img src="images/react.png" alt="img" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Weather Application</h2>
                <p>Built using React,django frameworks and hosted on AWS EC2 instance </p>
                <a href="https://github.com/vishwa-s-a/weather_app"><h1 className="text-1xl font-bold">Know more</h1></a>
                <div className="card-actions justify-between"></div>
              </div>
            </div>
          </div>
          <div className="mt-4 m-3">
            <div className="card w-92 p-5 hover:scale-105 duration-200 dark:border  ">
              <figure class="w-4/6 m-auto">
                <img src="images/nodejs.png" alt="img" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">ROOMMATE FINDER</h2>
                <p>Full-stack website built using nodejs and other required npm packages for libraries like mongoose, express-js</p>
                <a href="https://github.com/vishwa-s-a/roomMateFinder"><h1 className="text-1xl font-bold">Know more</h1></a>
                <div className="card-actions justify-between"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Project;
