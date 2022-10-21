import React from "react";
import Button from "./Button";

// Imgs
import hero_blob from "../img/hero_blob.webp"
import hero_img from "../img/hero_img.webp"

const Home = () => {
  return (
    <section className="pt-16 sm:pt-20 lg:pt-44 h-screen">
      <article className="max-w-screen-2xl mx-auto text-type">
        <div className="px-6 md:px-12 2xl:px-6 flex flex-col md:flex-row justify-center items-center gap-12">
          <div className="md:w-3/6 space-y-2 md:space-y-4">
            <p id="reveal_para" className="font-light text-primary text-md pt-6 leading-loose"><em>Welcome to Calm N Fresh</em></p>

            <h2 id="reveal" className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-light lg:leading-relaxed">Natural care for natural beauty.</h2>

            <p id="reveal_para" className="font-light text-xl lg:text-2xl pt-6 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.</p>

            <aside id="reveal_btn" className='hidden md:block pt-12 md:pt-16 space-y-2'>
              <Button href="/plan" text="Discover"/>
            </aside>
          </div>

          <div className="pt-12 sm:w-3/6 relative">
            <img src={hero_blob} alt="blob" className="absolute right-6 top-0 scale-110"/> 
            <img src={hero_img} width="" height="" id="fade-in-image" alt="illustration" className="md:relative"/>
            
            <aside id="reveal_btn" className='md:hidden text-center pt-2 md:pt-24 space-y-2'>
              <Button
                text="Contact Us"
              />
            </aside>
          </div>
        </div>
        
      </article>
    </section>
  )
};

export default Home;