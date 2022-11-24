import React from "react";

// Imgs

const FeatureCard = ({ icon, head, para }) => {
  return (
    <div className="bg-formcta-bg bg-cover rounded-xl p-8 text-white sm:w-4/6 md:w-3/6 lg:w-full mx-auto">
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        <img src={icon} alt="vector icon"/>
        <div className="space-y-2">
          <h2 className=" text-3xl">{head}</h2>
          {/* <p className="text-sm">{para}</p> */}
        </div>
      </div>
    </div>
  )
  
};

export default FeatureCard;