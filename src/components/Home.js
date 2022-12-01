import React from "react";
import FeatureCard from "./FeatureCard";
import Brand from "./Brand";
import CTA from "./CTA";
import { Link } from "react-scroll";

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
          <div className="flex flex-col md:flex-row justify-center items-center gap-2">
            <div className="md:w-3/6 md:space-y-4">
              <p id="reveal_para" className="font-medium text-primary text-xl lg:text-3xl pt-6 leading-loose"><em>Welcome to Punjab Medicare</em></p>

              <h2 id="reveal" className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal lg:leading-relaxed">Healing through Nature.</h2>

              <p id="reveal_para" className="font-light text-lg lg:text-2xl pt-6">For a healthy mind and body, you can't overlook Ayurvedic Medicine. We have been in business for 60+ years.</p>

              <aside id="reveal_btn" className='hidden md:block pt-12 space-y-2'>
                <Link to="brands" spy={true} smooth={true} offset={-20} duration={800}><button className="font-medium w-3/6 py-4 bg-gradient-to-tl from-primary to-secondary text-white text-xs lg:text-sm rounded-full transition-all hover:scale-105 hover:tracking-[2px]">Discover Brands </button></Link>
              </aside>
            </div>

            <div className="pt-12 sm:w-3/6 relative">
              <img src={hero_blob} alt="blob" className="absolute top-0 scale-110"/> 
              <img src={hero_img2} width="2880" height="2000" id="fade-in-image" alt="illustration" className="relative bottom-6 drop-shadow-xl hover:scale-110 transition-all"/>
              
              <aside id="reveal_btn" className='md:hidden text-center pt-20 space-y-2'>
                <Link to="brands" spy={true} smooth={true} offset={-100} duration={800}><button className="font-medium w-3/6 py-4 bg-gradient-to-tl from-primary to-secondary text-white text-xs lg:text-sm rounded-full transition-all hover:scale-105 hover:tracking-[2px]">Discover </button></Link>
              </aside>
            </div>
          </div>

          <div className="mt-36 flex flex-col md:flex-row gap-6">
            <FeatureCard
              icon={store}
              head="Ayurvedic Store"
            />
            <FeatureCard
              icon={consultations}
              head="Consultations"
            />
            <FeatureCard
              icon={treatments}
              head="Treatments"
            />
          </div>
        </section>

        {/* Products Section */}
        <section id="brands" className="py-24 space-y-24">
          <h1 className="text-4xl md:text-5xl text-center uppercase">Brands we offer</h1>

          <article className="flex flex-col md:flex-row items-center gap-12">
            <Brand/>
          </article>
        </section>
      </article>

      {/* <FormCTA /> */}

      <CTA
        bg="bg-cta-bg2"
        head="Extraordinary Ayurvedic medicine for ordinary people."
        para="The brand you are looking for is not available? That's okay! contact us you can order them from our store."
      />

      {/* CTA CLIENT TRUST */}
      <article className="w-5/6 sm:max-w-screen-lg mx-auto bg-white shadow-2xl rounded-xl px-6 py-8 flex flex-col md:flex-row justify-center gap-6 items-center -translate-y-12 md:divide-x divide-type">
        <div className="">
          <h2 className="font-light text-2xl md:text-3xl">We offer Ayurvedic medicines from Haryana, India.</h2>
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
          <h3 className="font-medium text-primary text-md leading-loose"><em>Why Ayurvedic</em></h3>
          <h2 className="font-light text-6xl">Why should you choose Ayurvedic?</h2>
          <p>
            Ayurvedic medicine is a holistic approach to health care. It is one of the oldest forms of medicine in the world, dating back to about 4,000 years ago.
            The ayurvedic system focuses on treating and preventing disease through diet, exercise, herbal remedies, and other natural therapies.
            Interest in ayurvedic medicine has grown due to its efficacy without any adverse side effects.
            <br/>
            <br/>
            Ayurvedic medicine has been around for a long time and is a traditional form of medicine. It can be used to treat many different types of illnesses and is even used in some hospitals today.
          </p>

          <div>
            
          </div>
        </section>

        <section className="md:w-3/6 space-y-6">
          <div className="flex gap-6 border border-type/30 rounded-xl p-6">
            <span className="bg-secondary p-4 rounded-xl text-white text-4xl">1</span>
            <div className="space-y-2">
              <h2 className="font-medium text-xl">Check your brand</h2>
              <p>Check your brand from the "Brands we offer" section that it's available or not.</p>
            </div>
          </div>

          <div className="flex gap-6 border border-type/30 rounded-xl p-6">
            <span className="bg-secondary p-4 rounded-xl text-white text-4xl">2</span>
            <div className="space-y-2">
              <h2 className="font-medium text-xl">Drop us a message</h2>
              <p>Fill out the form and let us know what is the product you are looking for</p>
            </div>
          </div>

          <div className="flex gap-6 border border-type/30 rounded-xl p-6">
            <span className="bg-secondary p-4 rounded-xl text-white text-4xl">3</span>
            <div className="space-y-2">
              <h2 className="font-medium text-xl">Rest we will handle</h2>
              <p>We will contact you within 24 hours and place your order in no time.</p>
            </div>
          </div>

        </section>
      </article>

      <CTA
        bg="bg-cta-bg"
        head="Discount up to 15% for first purchase from our website."
        para="The brand you are looking for is not available? That's okay! contact us you can order them from our store."
      />
    </section>
  )
};

export default Home;  