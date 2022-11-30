import React from "react";
import { Link } from "react-scroll";

// Imgs

const FeatureCard = ({ icon, head }) => {
  return (
    <div className="bg-gradient-to-tr cursor-pointer from-secondary to-primary rounded-xl p-8 text-white w-full sm:w-4/6 md:w-3/6 lg:w-full mx-auto">
      <Link to="form" spy={true} smooth={true} offset={-200} duration={800}>
        <div className="flex flex-col lg:flex-row gap-6 items-start">
        <img src={icon} alt="vector icon"/>
        <div className="space-y-2">
          <h2 className=" text-3xl">{head}</h2>
        </div>
      </div>
    </Link>
    </div>
  )
  
};

export default FeatureCard;