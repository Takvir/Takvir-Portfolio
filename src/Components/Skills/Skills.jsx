import React from 'react';
import './Skills.css'
const Skills = () => {
  

    return (
<div className='bg-gray-800 '>
    <div className='container-box py-10'>
    <h1 className="text-center text-white text-5xl font-bold mb-8">SKILLS</h1>
        <div className='grid lg:grid-cols-4 grid-cols-2 gap-4 mt-6 place-items-center'>
    <div className="radial-progress text-sky-600" style={{"--value":90 , "--size": "8rem", "--thickness": "8px"}} role="progressbar">Angular</div>
    <div className="radial-progress text-violet-50" style={{"--value":90 , "--size": "8rem", "--thickness": "8px"}} role="progressbar">React</div>
    <div className="radial-progress text-sky-600" style={{"--value":95 , "--size": "8rem", "--thickness": "8px"}} role="progressbar">HTML</div>
    <div className="radial-progress text-violet-50" style={{"--value":90 , "--size": "8rem", "--thickness": "8px"}} role="progressbar">CSS</div>
    <div className="radial-progress text-sky-600" style={{"--value":60 , "--size": "8rem", "--thickness": "8px"}} role="progressbar">Node JS</div>
    <div className="radial-progress text-violet-50" style={{"--value":90 , "--size": "8rem", "--thickness": "8px"}} role="progressbar">JavaScript</div>
    <div className="radial-progress text-sky-600" style={{"--value":65 , "--size": "8rem", "--thickness": "8px"}} role="progressbar">Mongo DB</div>
    <div className="radial-progress text-violet-50" style={{"--value":90 , "--size": "8rem", "--thickness": "8px"}} role="progressbar">TypeScript</div>
    <div className="radial-progress text-sky-600" style={{"--value":60 , "--size": "8rem", "--thickness": "8px"}} role="progressbar">Git</div>
    <div className="radial-progress text-violet-50" style={{"--value":70 , "--size": "8rem", "--thickness": "8px"}} role="progressbar">Express JS</div>
    <div className="radial-progress text-sky-600" style={{"--value":85 , "--size": "8rem", "--thickness": "8px"}} role="progressbar">Responsive</div>
    <div className="radial-progress text-violet-50" style={{"--value":60 , "--size": "8rem", "--thickness": "8px"}} role="progressbar">Deployement</div>
        </div>
    
      
    </div>


    </div>
    );
};

export default Skills;