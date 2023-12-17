import React from "react";
import './About.css'
import { FaBriefcase, FaTools, FaCertificate } from "react-icons/fa";
import TakvirPro from '../../assets/images/takvirpro.png'

const About = () => {
  return (
    <div>
      <div className="hero bg-slate-900">
        <div className="container-box py-10 tracking-wide font-sans	">
          <h1 className="text-center text-white text-5xl font-bold">ABOUT</h1>
          <h1 className="text-center text-white italic mt-5 text-xl">
            I am passionate and enthusiastic software developer, I find pure joy
            in the art of crafting elegant code.
          </h1>
          <div className="hero-content flex-col lg:flex-row gap-6">
            <img
              src={TakvirPro}
              className="max-w-sm rounded-lg shadow-2xl bg-gray-800"
            />
            <div className="">
              <div className="grid lg:grid-cols-3 gap-6 justify-items-center">
                <div className="card w-40 bg-gray-800 border-4 border-sky-600 text-white shadow-xl">
                  <figure className="px-10 pt-4">
                    <FaBriefcase size={40} />
                  </figure>

                  <div className="items-center mt-3 mb-3 text-center">
                    <h2 className="">Experience</h2>
                    <p className="text-sm">2+ years Working</p>
                  </div>
                </div>
                <div className="card w-40 bg-gray-800 border-4 border-sky-600 text-white shadow-xl">
                  <figure className="px-10 pt-4">
                  <FaTools size={40} />
                  </figure>

                  <div className="items-center mt-3 mb-3 text-center">
                    <h2 className="">Projects</h2>
                    <p className="text-sm">on 10+ projects & modules </p>
                  </div>
                </div>
                <div className="card w-40 bg-gray-800 border-4 border-sky-600 text-white shadow-xl">
                  <figure className="px-10 pt-4">
                  <FaCertificate size={30} />
                  </figure>

                  <div className="items-center mt-3 mb-3 text-center">
                    <h2 className="">Certifications</h2>
                    <p className="text-sm">MERN Stack Web Development</p>
                  </div>
                </div>
              </div>
              <p className="my-4 mt-8 text-lg text-white subpixel-antialiased">
              Proficient in HTML,
CSS, JavaScript, and popular frontend frameworks like Angular and React. Skilled in problem-solving, team
collaboration, communication and Real-World project.
              </p>
              <div className="leading-loose subpixel-antialiased text-lg">
              <h2 className="text-white">Currently Working : SELISE Digital Platform</h2>               
              <h2 className="text-white">Experience : 1.5</h2>
              <h2 className="text-white">Speciality : Angular , React</h2>
              <h2 className="text-white">Email : takvir.alam@gmail.com</h2>
              <h2 className="text-white">Phone : +8801992708084</h2></div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
