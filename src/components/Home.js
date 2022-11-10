import React from "react";
import Button from "./Button";
import FeatureCard from "./FeatureCard";
import Brand from "./Brand";
import CTA from "./CTA";

// Imgs
import hero_blob from "../img/hero_blob.webp"
// import hero_img from "../img/hero_img.webp"
import hero_img2 from "../img/hero_img2.webp"
import store from "../img/storeVector.svg"
import consultations from "../img/consultationsVector.svg"
import treatments from "../img/treatmentsVector.svg"

const Home = () => {
  return (
    <section className="pt-16 sm:pt-20 lg:pt-36 text-type">
      <article className="max-w-screen-xl mx-auto  px-6 md:px-12 2xl:px-6">
      {/* Hero Section */}
        <section>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            <div className="md:w-3/6 md:space-y-4">
              <p id="reveal_para" className="font-medium text-primary text-md pt-6 leading-loose"><em>Welcome to Punjab Medicare</em></p>

              <h2 id="reveal" className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal lg:leading-relaxed">Natural care for natural beauty.</h2>

              <p id="reveal_para" className="font-light text-lg lg:text-2xl pt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.</p>

              <aside id="reveal_btn" className='hidden md:block pt-12 space-y-2'>
                <Button href="/plan" text="Discover"/>
              </aside>
            </div>

            <div className="pt-12 sm:w-3/6 relative">
              <img src={hero_blob} alt="blob" className="absolute top-0 scale-105"/> 
              <img src={hero_img2} width="2880" height="2000" id="fade-in-image" alt="illustration" className="relative"/>
              
              <aside id="reveal_btn" className='md:hidden text-center pt-24 space-y-2'>
                <Button href="/plan" text="Discover"/>
              </aside>
            </div>
          </div>

          <div className="mt-36 flex flex-col md:flex-row gap-6">
            <FeatureCard
              icon={store}
              head="Ayurvedic Store"
              para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum."
            />
            <FeatureCard
              icon={consultations}
              head="Consultations"
              para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum."
            />
            <FeatureCard
              icon={treatments}
              head="Treatments"
              para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum."
            />
          </div>
        </section>

        {/* Products Section */}
        <section className="py-24 space-y-24">
          <h1 className="text-4xl md:text-5xl text-center uppercase">Brands we offer</h1>

          <article className="flex flex-col md:flex-row items-center gap-12">
            <Brand/>
          </article>
        </section>
      </article>

      <CTA
        bg="bg-cta-bg2"
        head="Extraordinary medicine for ordinary people."
        para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum."
      />

      {/* CTA CLIENT TRUST */}
      <article className="w-5/6 sm:max-w-screen-lg mx-auto bg-white shadow-2xl rounded-xl px-6 py-8 flex flex-col md:flex-row justify-center gap-6 items-center -translate-y-12 md:divide-x divide-type">
        <div className="">
          <h2 className="font-light text-2xl md:text-3xl text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        </div>
        <div className="flex gap-4 items-center pl-4">
          <div className="text-3xl text-center">
            <h2 className="font-bold">14K+</h2>
            <p className="text-xs text-secondary font-medium uppercase">Happy Clients</p>
          </div>
          <div className="text-3xl text-center">
            <h2 className="font-bold">30K+</h2>
            <p className="text-xs text-secondary font-medium uppercase">Products Sold</p>
          </div>
        </div>
      </article>

      {/* HOW WE WORK */}
      <article className="max-w-screen-xl mx-auto px-6 md:px-12 2xl:px-6 pb-24 flex flex-col md:flex-row gap-6">
        <section className="md:w-3/6 space-y-6">
          <h3 className="font-medium text-primary text-md leading-loose"><em>How we work</em></h3>
          <h2 className="font-light text-6xl">Easy steps to order the services.</h2>
          <p>
            Dapibus imperdiet hendrerit purus curae ornare consequat. Aliquet consectetuer ligula integer tempor taciti egestas cubilia nam gravida mattis. Mus sodales aliquet turpis natoque pede.r ligula integer tempor taciti egestas cubilia nam gravida mattis. Mus sodales aliquet turpis natoque pede.
            <br/>
            <br/>
            Dapibus imperdiet hendrerit purus curae ornare consequat. Aliquet consectetuer ligula integer tempor taciti egestas cubilia nam gravida mattis. Mus sodales aliquet turpis natoque pede.r ligula integer tempor taciti egestas cubilia nam gravida mattis. Mus sodales aliquet turpis natoque pede.
          </p>

          <div>
            
          </div>
        </section>

        <section className="md:w-3/6 space-y-6">
          <div className="flex gap-6 border border-type/30 rounded-xl p-6">
            <span className="bg-secondary p-4 rounded-xl text-white text-4xl">1</span>
            <div className="space-y-2">
              <h2 className="font-medium text-xl">Consultations with our expert</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.</p>
            </div>
          </div>

          <div className="flex gap-6 border border-type/30 rounded-xl p-6">
            <span className="bg-secondary p-4 rounded-xl text-white text-4xl">2</span>
            <div className="space-y-2">
              <h2 className="font-medium text-xl">Consultations with our expert</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.</p>
            </div>
          </div>

          <div className="flex gap-6 border border-type/30 rounded-xl p-6">
            <span className="bg-secondary p-4 rounded-xl text-white text-4xl">3</span>
            <div className="space-y-2">
              <h2 className="font-medium text-xl">Consultations with our expert</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.</p>
            </div>
          </div>

        </section>
      </article>

      <CTA
        bg="bg-cta-bg"
        head="Discount up to 50% for first purchase."
        para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum."
      />
    </section>
  )
};

export default Home;  