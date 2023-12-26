
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Experience from './Components/Experience/Experience'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Portfolio from './Components/Portfolio/Portfolio'
import Skills from './Components/Skills/Skills'

function App() {


  return (
    <>

      <div>
        <Navbar></Navbar>
        <Home></Home>
        <About></About>
        <Skills></Skills>
        <Experience></Experience>
        <Portfolio></Portfolio>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
