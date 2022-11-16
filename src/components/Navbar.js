import React, { useState, useEffect } from 'react';
import Button from './Button';
import Link from './Link';

// imgs
import logo from '../img/logo.svg';


const Navbar = () => {

  const hamburgerClick = () => document.querySelector('#mobile_menu').classList.toggle('hidden');

  const [scroll, setScroll] = useState(false);
    useEffect(() => {
    window.addEventListener("scroll", () => {
    setScroll(window.scrollY > 1);
    });
  }, []);
  
  return (
    <section className="font-roboto text-type">
      <nav id='navbar'
        className={scroll ? "bg-white fixed w-full left-0 px-8 md:px-10 lg:px-16 xl:px-24 py-4 z-40 shadow-md duration-300 transition-all" : "fixed w-full left-0 px-8 md:px-10 lg:px-16 xl:px-24 py-16 md:py-20 z-40 transition-all"}>
        
        <div className="max-w-screen-xl mx-auto flex justify-between items-center text-xs lg:text-sm uppercase">
          
          {/* <a href='/' className="text-2xl font-bold">Punjab Medicare</a> */}
          <Link href='/' className="text-2xl font-bold"><img src={ logo } alt="logo" className='w-12 lg:w-20 h-12 lg:h-20 scale-110 hover:scale-125 transition-all'/></Link>
          
          <i id="myBtn" className="fa-solid fa-bars md:hidden text-dark text-2xl text-neutral cursor-pointer" onClick={hamburgerClick}></i>
          
          <aside id="desktop_menu" className="hidden md:block text-dark">
            <div className="font-medium list-none flex items-center gap-4 xl:gap-">
              <Link href='/' className="py-2 px-4 font-normal cursor-pointer text-neutral hover:text-secondary hover:underline underline-offset-4 transition-colors">Home</Link>

              <Link href='/about' className="py-2 px-4 font-normal cursor-pointer text-neutral hover:text-secondary hover:underline underline-offset-4 transition-colors">About</Link>

              <aside className='hidden md:block w-64'>
                <Button
                  text="Contact Us"
                />
              </aside>
            </div>
          </aside>

        </div>

      </nav>
      <aside id="mobile_menu" className="bg-white text-dark hidden md:hidden fixed w-full top-20 right-0 py-6 z-30">
        <div className="space-y-8">
          <div className="px-6 font-normal text-neutral text-center text-lg list-none flex flex-col">
            <a href="/" className="py-4 cursor-pointer hover:text-secondary transition-colors">Home</a>
            <a href="/about" className="py-4 cursor-pointer hover:text-secondary transition-colors">About</a>
            <Button
              text="Contact Us"
            />
          </div>
        </div>
      </aside>

    </section>
  );
};

export default Navbar;