import React from "react";
import "./Home.css";
import Takvir from "./../../assets/Takvir.jpg";
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const Home = ({ sectionNumber }) => {
  return (
    <div className="pt-8 pb-24 bg-gray-800">
      <div className="container-box mt-12 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="avatar" >
            <div className="w-44 mask mask-squircle border-x-4 border-indigo-500">
              <img src={Takvir} />
            </div>
          </div>
          <div className="lg:w-1/2 sm:w-full">
            
            <h1 className="text-4xl font-bold text-white tracking-widest">TAKVIR ALAM</h1>
            <p className="text-xl mt-3 text-sky-600 tracking-widest font-semibold">SOFTWARE ENGINEER</p>
            <p className="my-4 mt-8 mb-8 text-xl text-white tracking-widest">Highly motivated Software Engineer with a real experience and passion for front-end development.</p>

            <div className="flex gap-10">
              <a className="text-gray-200 " href="https://www.facebook.com/likhon.alam" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} />
              </a>
              <a className="text-gray-200 text-xl " href="https://www.linkedin.com/in/takvir-alam-166614169/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} />
              </a>
              <a className="text-gray-200 " href="https://github.com/Takvir" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} />
              </a>
            </div>


          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
