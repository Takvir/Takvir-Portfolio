import React from "react";
import './Portfolio.css'
import Decent from '../../assets/images/Decent.jpg'
import MCG from '../../assets/images/MCG.jpg'
import Saloon from '../../assets/images/Saloon.jpg'
import Employee from '../../assets/images/Employee.jpg'
import Meal from '../../assets/images/Meal.jpg'
import Resturant from '../../assets/images/Resturant.jpg'


const Portfolio = ({ sectionNumber }) => {
  return (
    <div className="bg-gray-800">
      <div className="container-box py-10">
        <h1 className="text-center text-gray-200 text-5xl mb-10 font-bold underline hover:decoration-dashed">
          Portfolio
        </h1>
        <div className="grid lg:grid-cols-3 gap-12 place-items-center">
          <div className="card h-96 border-2 border-sky-600 w-64 bg-gray-900 shadow-xl">
          <a href="https://www.facebook.com/likhon.alam">
          <figure className="px-4 pt-5">
              <img
                src={Decent}
                alt="DECENT"
                className="rounded-xl w-96 h-32"
                
              />
            </figure>
          </a>

            <div className="px-4 pt-5 text-white ">
             
              <h2 className="text-center text-cyan-200 font-bold tracking-widest mb-1">Decent Inventory</h2>
              <p className="text-sm text-center mb-2">SELISE Digital Platform</p>
              <p className="text-cyan-600 font-bold">Stack :<span className="text-gray-200 font-mono"> Angular,TypeScript</span> </p>
              <p className=" text-cyan-600 font-bold">Github : <span className="text-gray-200">N/A</span> </p>
              <p className="text-cyan-600 font-bold ">Description : <span className="text-gray-200 font-thin tracking-wide">This application provides whole functionality for managing inventory System.</span> </p>

            </div>
          </div>

          <div className="card h-96 border-2 border-sky-600 w-64 bg-gray-900 shadow-xl">
           <a href="https://secure.salon.coop/#/sign-in">
           <figure className="px-4 pt-5">
              <img
                src={Saloon}
                alt="Shoes"
                className="rounded-xl w-96 h-32"
              />
            </figure>
           </a>

            <div className="px-4 pt-5 text-white ">
              <h2 className="text-center text-cyan-200 font-bold tracking-widest mb-2">Salon Coop</h2>
              <p className="text-sm text-center mb-2">SELISE Digital Platform</p>
              <p className="text-cyan-600 font-bold">Stack : <span className="text-gray-200 font-mono">Angular,TypeScript </span> </p>
              <p className=" text-cyan-600 font-bold">Github : <span className="text-gray-200">N/A</span></p>
              <p className="text-cyan-600 font-bold ">Description : <span className="text-gray-200 font-thin tracking-wide">With Salon Coop user can invest their fund and buy share with amount.</span> </p>

            </div>
          </div>


          <div className="card h-96 border-2 border-sky-600 w-64 bg-gray-900 shadow-xl">
           <a href="https://login.mycareergate.ch/login">
           <figure className="px-4 pt-5">
              <img
                src={MCG}
                alt="Shoes"
                className="rounded-xl w-96 h-32"
              />
            </figure>
           </a>

            <div className="px-4 pt-5 text-white ">
              <h2 className="text-center text-cyan-200 font-bold tracking-widest mb-2">My Career Gate (MCG)</h2>
              <p className="text-sm text-center mb-2">SELISE Digital Platform</p>
              <p className="text-cyan-600 font-bold">Stack : <span className="text-gray-200 font-mono">Angular,TypeScript </span> </p>
              <p className=" text-cyan-600 font-bold">Github : <span className="text-gray-200">N/A</span></p>
              <p className="text-cyan-600 font-bold ">Description : <span className="text-gray-200 font-thin tracking-wide">This application can find the company that suits best.</span> </p>

            </div>
          </div>

          <div className="card h-96 border-2 border-sky-600 w-64 bg-gray-900 shadow-xl">
            <figure className="px-4 pt-5">
              <img
                src={Employee}
                alt="Shoes"
                className="rounded-xl w-96 h-32"
              />
            </figure>


            <div className="px-4 pt-5 text-white ">
              <h2 className="text-center text-cyan-200 font-bold tracking-widest mb-2">Employee Management</h2>
              
              <p className="text-cyan-600 font-bold">Stack : <span className="text-gray-200 font-mono">Angular, Node JS </span> </p>
              <p className=" text-cyan-600 font-bold">Github : <span className="text-gray-200">N/A</span></p>
              <p className="text-cyan-600 font-bold ">Description : <span className="text-gray-200 font-thin tracking-wide">This Application is using to add Employee with details. User can Update and Delete employee.</span> </p>

            </div>
          </div>

          <div className="card h-96 border-2 border-sky-600 w-64 bg-gray-900 shadow-xl">
            <figure className="px-4 pt-5">
              <img
                src={Meal}
                alt="Meal"
                className="rounded-xl w-96 h-32"
              />
            </figure>


            <div className="px-4 pt-5 text-white ">
              <h2 className="text-center text-cyan-200 font-bold tracking-widest mb-2">Favorites Food</h2>
              
              <p className="text-cyan-600 font-bold">Stack : <span className="text-gray-200 font-mono">Angular, Rest API </span> </p>
              <p className=" text-cyan-600 font-bold">Github : <span className="text-gray-200">N/A</span></p>
              <p className="text-cyan-600 font-bold ">Description : <span className="text-gray-200 font-thin tracking-wide">This Application is for searching food with category. It will redirect to food details with ingredients.</span> </p>

            </div>
          </div>

          <div className="card h-96 border-2 border-sky-600 w-64 bg-gray-900 shadow-xl">
            <figure className="px-4 pt-5">
              <img
                src={Resturant}
                alt="Meal"
                className="rounded-xl w-96 h-32"
              />
            </figure>


            <div className="px-4 pt-5 text-white ">
              <h2 className="text-center text-cyan-200 font-bold tracking-widest mb-2">Geritch Resturant</h2>
              
              <p className="text-cyan-600 font-bold">Stack : <span className="text-gray-200 font-mono">React Vite </span> </p>
              <p className=" text-cyan-600 font-bold">Github : <span className="text-gray-200">N/A</span></p>
              <p className="text-cyan-600 font-bold ">Description : <span className="text-gray-200 font-thin tracking-wide ">This is modern and fully responsive website which can be use for resturant</span> </p>

            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
