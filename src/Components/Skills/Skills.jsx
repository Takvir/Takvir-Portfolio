import React from 'react';
import './Skills.css'
const Skills = ({ sectionNumber }) => {
  

    return (
<div className='bg-gray-800 '>
    <div className='container-box py-10'>
    <h1 className="text-center text-gray-200 text-5xl font-bold mb-8 underline hover:decoration-dashed">SKILLS</h1>
        <div className='grid  lg:grid-cols-4 grid-cols-2 gap-4 mt-8 place-items-center'>
    <div className="radial-progress text-sky-600" style={{"--value":90 , "--size": "8rem", "--thickness": "8px"}} role="progressbar"><span className='text-violet-50 font-bold'>Angular </span> </div>
    <div className="radial-progress text-violet-50" style={{"--value":90 , "--size": "8rem", "--thickness": "8px"}} role="progressbar"><span className='text-sky-600 font-bold'>React</span> </div>
    <div className="radial-progress text-sky-600" style={{"--value":95 , "--size": "8rem", "--thickness": "8px"}} role="progressbar"> <span className='text-violet-50 font-bold'>HTML</span></div>
    <div className="radial-progress text-violet-50" style={{"--value":90 , "--size": "8rem", "--thickness": "8px"}} role="progressbar"><span className='text-sky-600 font-bold'>CSS</span></div>
    <div className="radial-progress text-sky-600" style={{"--value":60 , "--size": "8rem", "--thickness": "8px"}} role="progressbar"><span className='text-violet-50 font-bold'>Node JS</span></div>
    <div className="radial-progress text-violet-50" style={{"--value":90 , "--size": "8rem", "--thickness": "8px"}} role="progressbar"><span className='text-sky-600 font-bold'>JavaScript</span></div>
    <div className="radial-progress text-sky-600" style={{"--value":65 , "--size": "8rem", "--thickness": "8px"}} role="progressbar"><span className='text-violet-50 font-bold'>Mongo DB</span></div>
    <div className="radial-progress text-violet-50" style={{"--value":90 , "--size": "8rem", "--thickness": "8px"}} role="progressbar"><span className='text-sky-600 font-bold'>TypeScript</span></div>
    <div className="radial-progress text-sky-600" style={{"--value":60 , "--size": "8rem", "--thickness": "8px"}} role="progressbar"><span className='text-violet-50 font-bold'>Git</span></div>
    <div className="radial-progress text-violet-50" style={{"--value":70 , "--size": "8rem", "--thickness": "8px"}} role="progressbar"><span className='text-sky-600 font-bold'>Express JS</span></div>
    <div className="radial-progress text-sky-600" style={{"--value":85 , "--size": "8rem", "--thickness": "8px"}} role="progressbar"><span className='text-violet-50 font-bold'>Responsive</span></div>
    <div className="radial-progress text-violet-50" style={{"--value":60 , "--size": "8rem", "--thickness": "8px"}} role="progressbar"><span className='text-sky-600 font- bold'>Deployement</span></div>
        </div>
    
      
    </div>


    </div>
    );
};

export default Skills;