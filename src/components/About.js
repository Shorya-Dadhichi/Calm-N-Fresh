import React from "react";
import CTA from "./CTA";

// imgs
import hero_img from "../img/hero_img.webp"

const About = () => {
  return (
    <div className="pt-20 sm:pt-32 lg:pt-44 text-type">
      <div className="max-w-screen-xl px-4 md:px-8 mx-auto py-12">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <div className="h-auto overflow-hidden rounded-lg drop-shadow-2xl">
              <img src={hero_img} loading="lazy" alt="Plant meds" className="w-full h-full object-cover object-center" />
            </div>
          </div>

          <div className="md:pt-8">
            <p className="text-primary font-bold text-center md:text-left">Who we are</p>

            <h2 className="text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-6">About us</h2>

            <p className="sm:text-lg mb-6 md:mb-8">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text.</p>

            <h2 className="text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-6">About our product</h2>

            <p className=" sm:text-lg mb-6 md:mb-8">
              Ayurvedic medicine is a traditional form of alternative medicine that originated in India.

              The word "ayurveda" means "the science of life." Ayurvedic medicines are made from natural ingredients, such as herbs, minerals and animal products. They are used to maintain health and prevent disease.
              <br /><br />

              Ayurvedic medicines have been used for thousands of years to treat various conditions, including pain, arthritis, asthma and insomnia.

              Ayurvedic medicines can be purchased in stores or online. However, it is important to consult a doctor before starting an ayurvedic treatment or herbal supplement regimen.
            </p>
          </div>
        </div>
      </div>
      <CTA
        bg="bg-cta-bg"
        head="Discount up to 15% for first purchase from our website."
        para="The brand you are looking for is not available? That's okay! contact us you can order them from our store."
      />
    </div>
  )
};

export default About;