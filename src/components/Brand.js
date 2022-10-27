import React from "react";
import Button from "./Button";

// Imgs

const Brand = ({ logo, name}) => {
  return (
    <div className="space-y-6">
      <img src={logo} alt="Brand Logo" className="w-4/6 sm:w-5/6 lg:w-4/6 mx-auto" />
      <h2 className="text-center font-bold text-xl">{name}</h2>
      <aside id="reveal_btn" className='text-center'>
        <Button href="/plan" text="Discover"/>
      </aside>
    </div>
  )
};

export default Brand;