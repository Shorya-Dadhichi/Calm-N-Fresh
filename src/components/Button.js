import React from "react";

// Imgs

const Button = ({text}) => {
  return (
    <div className="">
      <a href='/contact'><button className="font-medium w-3/6 py-4 bg-gradient-to-tl from-primary to-secondary text-white text-xs lg:text-sm rounded-full transition-all hover:scale-105 hover:tracking-[2px]">{text}</button></a>
    </div>
  )
};

export default Button;