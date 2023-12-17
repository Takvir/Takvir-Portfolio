import React from "react";
import './Portfolio.css'
import Decent from '../../assets/images/Decent.jpg'
import MCG from '../../assets/images/MCG.jpg'
import Saloon from '../../assets/images/Saloon.jpg'
import Employee from '../../assets/images/Employee.jpg'
import Meal from '../../assets/images/Meal.jpg'
import Resturant from '../../assets/images/Resturant.jpg'


const Portfolio = () => {
  return (
    <div className="bg-gray-800">
      <div className="container-box py-10">
        <h1 className="text-center text-white text-5xl mb-10 font-bold">
          Portfolio
        </h1>
        <div className="grid lg:grid-cols-3 gap-12 place-items-center">
          <div className="card h-96 border-2 border-sky-600 w-64 bg-gray-900 shadow-xl">
            <figure className="px-4 pt-5">
              <img
                src={Decent}
                alt="Shoes"
                className="rounded-xl w-96 h-32"
              />
            </figure>
            <div className="px-4 pt-5 text-white ">
              <h2 className="text-center">Decent Inventory</h2>
              <p>SELISE Digital Platform</p>
              <p>Tech stack : Angular, TypeScript</p>
              <p>Github : www.github.com</p>
              <p>Description : This application provides whole functionality for managing inventory System</p>

            </div>
          </div>

          <div className="card h-96 border-2 border-sky-600 w-64 bg-gray-900 shadow-xl">
            <figure className="px-4 pt-5">
              <img
                src={Saloon}
                alt="Shoes"
                className="rounded-xl w-96 h-32"
              />
            </figure>
            <div className="px-4 pt-5 text-white ">
              <h2 className="text-center">Salon Coop</h2>
              <p>SELISE Digital Platform</p>
              <p>Tech stack : Angular, TypeScript</p>
              <p>Github : www.github.com</p>
              <p>Description : With Salon Coop user can invest their fund and buy share with amount.</p>

            </div>
          </div>


          <div className="card h-96 border-2 border-sky-600 w-64 bg-gray-900 shadow-xl">
            <figure className="px-4 pt-5">
              <img
                src={MCG}
                alt="Shoes"
                className="rounded-xl w-96 h-32"
              />
            </figure>
            <div className="px-4 pt-5 text-white ">
              <h2 className="text-center">My Career Gate (MCG)</h2>
              <p>SELISE Digital Platform</p>
              <p>Tech stack : Angular, TypeScript</p>
              <p>Github : www.github.com</p>
              <p>Description : This application can find the company that suits best.</p>

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
              <h2 className="text-center">Employee Management</h2>
              <p></p>
              <p>Tech stack : Angular, Node JS</p>
              <p>Github : www.github.com</p>
              <p>Description : This Application is using to add Employee with details. User can Update and Delete employee.</p>

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
              <h2 className="text-center">Favorites Food</h2>
              <p></p>
              <p>Tech stack : Angular, Rest API</p>
              <p>Github : www.github.com</p>
              <p>Description : This Application is for searching food with category. It will redirect to food details with ingredients.</p>

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
              <h2 className="text-center">Geritch Resturant</h2>
              <p></p>
              <p>Tech stack : React Vite</p>
              <p>Github : www.github.com</p>
              <p>Description : This is modern and fully responsive website which can be use for resturant </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
