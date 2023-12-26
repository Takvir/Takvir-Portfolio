import React from "react";
import "./Experience.css";

const Experience = ({ sectionNumber }) => {
    return (
        <div className="bg-slate-900">
            <div className="container-box py-10">
                <h1 className="text-center  text-5xl mb-8 font-bold underline hover:decoration-dashed text-gray-200">Experience & Education</h1>
                <div className="flex flex-col w-full lg:flex-row justify-items-center">
                    <div className=" card tracking-wide text-white  border-4 leading-relaxed border-sky-600 bg-gray-800 rounded-box p-6">
                        <div>
                            <h1 className="font-bold text-cyan-600 mb-3">01/05/2022 --- CONTINUE</h1>
                            <h1 className="italic">Software Engineer</h1>
                            <h1 className="font-semibold mb-4">SELISE Digital Platform</h1>
                            <ul className="text-sm font-mono">
                                <li>-- Implementing new features and modules as per the requirement using HTML, CSS, Angular & TypeScript.</li>
                                <li>-- Implementing API integration and CRUD operations from the front-end side.</li>
                                <li>-- Maintaining PR review, coding standardization, rules and regulations set by the organization.</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className="font-bold text-cyan-600 mt-5 mb-3" >01/05/2022 -- Continue</h1>
                            <h1 className="italic">System Support Engineer</h1>
                            <h1 className="font-semibold mb-4">SELISE Digital Platform</h1>
                            <ul className="text-sm font-mono">
                                <li>-- Managing and monitoring all installed systems and infrastructure.</li>
                                <li>-- Installing, configuring, testing and maintaining operating systems, application software
                                    and system management tools.</li>
                                <li>-- Ensuring the highest levels of systems and infrastructure availability.</li>
                            </ul>
                        </div>


                    </div>
                    <div className="divider lg:divider-horizontal"></div>
                    <div className="grid w-full lg:w-1/2 flex-grow  card text-white  border-4 border-sky-600 bg-gray-800 rounded-box p-6">
                        <div className="leading-7">
                            <h1>2014 – 2018</h1>
                            <h1 className="font-bold text-cyan-600 italic ">Bachelor of Science</h1>
                            <h1>Computer Science and Engineering</h1>
                            <h1>Independent University, Bangladesh (IUB)</h1>
                        </div>
                        <div className="leading-7">
                            <h1>2011 – 2013</h1>
                            <h1 className="font-bold text-cyan-600 italic ">Higher Secondary Certificate</h1>
                            <h1>Mile Stone College</h1>
                            <h1 className="font-mono">GPA- 5.00</h1>
                        </div>
                        <div className="leading-7">
                            <h1>2009 – 2011</h1>
                            <h1 className="font-bold text-cyan-600 italic ">Secondary School Certificate</h1>
                            <h1>Willes Little Flower School and College</h1>
                            <h1 className="font-mono">GPA- 5.00</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
