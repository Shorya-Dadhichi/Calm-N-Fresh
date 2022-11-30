import React from "react";
import { Link } from "react-scroll";

// imgs
import img1 from '../img/baidyanath.webp';
import img2 from '../img/mohtaAyurvedic.webp';
import img3 from '../img/sadhana.webp';
import img4 from '../img/dhootpapewar.webp';
import img5 from '../img/sandu.webp';
import img6 from '../img/dabur.webp';
import img7 from '../img/humdard.webp';
import img8 from '../img/mewar.webp';
import img9 from '../img/zandu.webp';
import img10 from '../img/vaidyaShala.webp';
import img11 from '../img/unjha.webp';
import img12 from '../img/vaidyaratnam.webp';
import img13 from '../img/krishnaGopal.webp';

// Imgs

const Brand = () => {

  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13];

  return (
    <div className="">
      <div className="grid grid-cols-3 lg:grid-cols-3 gap-6 items-center">
        {images.map((img, key) => <Link to="form" spy={true} smooth={true} offset={-200} duration={800} key={key}><img alt="img" src={img}  className="w-5/6 md:w-3/6 mx-auto rounded-xl cursor-pointer scale-110 hover:scale-125 transition-all" /></Link>)}
      </div>
      
      <div id="form" className="mx-auto max-w-4xl text-center pt-32 pb-12 space-y-10">
        <div>
          <h1 className="text-2xl font-bold sm:text-5xl">Which product are you looking for?</h1>

          <p className="mt-4">
            Drop us a message on Whatsapp and we will get back to you within 24 hours.
          </p>
        </div>

        <a
          className="px-3 ml-3 inline-block font-medium w-full md:w-3/6 py-4 bg-[#49c256] text-white text-sm lg:text-sm rounded-full transition-all hover:scale-105 hover:tracking-wide"
          href="https://wa.me/+919991060450?text=I%20am%20looking%20for%20<YOUR PRODUCT NAME>">
          Text Your Product On WhatsApp <i className="fa-brands fa-whatsapp"></i>
        </a>
      </div>
    </div>


  )
};

export default Brand;