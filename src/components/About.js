import React from "react";

// imgs
import hero_img from "../img/hero_img.webp"

const About = () => {
  return (
    <div class="py-20 sm:py-32 lg:py-44 text-type">
      <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
        <div class="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <div class="h-auto overflow-hidden rounded-lg drop-shadow-xl">
              <img src={hero_img} loading="lazy" alt="Plant meds" class="w-full h-full object-cover object-center" />
            </div>
          </div>

          <div class="md:pt-8">
            <p class="text-primary font-bold text-center md:text-left">Who we are</p>

            <h1 class=" text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-6">Our competitive advantage</h1>

            <p class=" sm:text-lg mb-6 md:mb-8">
              This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text.<br /><br />

              This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text.
            </p>

            <h2 class="text-xl sm:text-2xl font-semibold text-center md:text-left mb-2 md:mb-4">About us</h2>

            <p class="sm:text-lg mb-6 md:mb-8">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text.</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;