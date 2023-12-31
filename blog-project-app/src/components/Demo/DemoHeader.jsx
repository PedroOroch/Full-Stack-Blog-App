import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { nav } from '../../data';
import Auth from './Auth/Auth';


const DemoHeader = () => {
  const [isActive, setIsActive] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect( (  ) => {
    const scrollMe = ( ) => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    };
    window.addEventListener("scroll", scrollMe)
  }, [ ]);
  return (
    <header className={`border-b border-black sticky top-0 z-50 
        ${isActive ? "bg-white" : "bg-blue-500"}
    transition-all duration-500`}>
      <div className='size h-[70px] flex items-center justify-between'>

      <Link to={"/"}>
        <img 
            className="h-[2.5rem]"
            src="https://quintagroup.com/cms/js/js-image/react.js-logo.png/@@images/a9bf22bd-373a-4fae-a900-c22fd12c87c7.png" 
            alt="logo" 
          />
      </Link>
      <div className='flex items-center gap-5'>
        <div className='hidden text-sm sm:flex items-center gap-5'>
          {nav.map((link, i) => (
            <Link key={ i } to={link.path}> {link.title} </Link>
          ))}
        </div>
        <div className='relative'>
          <button 
          onClick={( ) => setModal(true)}
          className='hidden text-sm sm:flex items-center gap-5'>Sign In</button>
          <Auth modal={modal} setModal={setModal}/>
        </div>
          <button 
          onClick={( ) => setModal(true)}
          className={` bg-black text-white rounded-full px-3 p-2 text-sm font-medium ${isActive ? "bg-blue-500" : "bg-black"}`}>Get Started</button>
      </div>

      </div>
      
    </header>
  )
}

export default DemoHeader