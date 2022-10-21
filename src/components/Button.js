import React from "react";

// Imgs

const Button = ({text}) => {
  return (
    <div className="">
      <a href='/contact'><button className="font-semibold w-3/6 py-3 bg-primary hover:bg-secondary text-light text-white text-xs lg:text-sm  rounded-full transition-all">{text}</button></a>
    </div>
  )
};

export default Button;