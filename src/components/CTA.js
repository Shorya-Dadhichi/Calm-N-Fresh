import React from "react";
import Button from "./Button";

// Imgs

const CTA = ({ bg, head, para }) => {
  return (
    
    <article className={`${bg} bg-cover bg-center py-20`}>
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 2xl:px-6 text-center text-white h-full flex flex-col justify-center items-center space-y-12">
        <h2 className="font-medium text-4xl md:text-5xl lg:text-7xl md:w-5/6">{head}</h2>
        <p className="text-lg md:text-2xl font-light md:w-4/6">{para}</p>
        <aside id="reveal_btn" className='text-center w-5/6 md:w-3/6'>
          <Button href="/plan" text="View Products"/>
        </aside>
      </div>
    </article>
  )
  
};

export default CTA;