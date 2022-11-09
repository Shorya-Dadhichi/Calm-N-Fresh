import React from "react";
// imgs
import img1 from '../img/baidyanath.webp';
import img2 from '../img/mohtaAyurvedic.webp';
import img3 from '../img/sadhana.webp';
import img4 from '../img/mewar.webp';
import img5 from '../img/sandu.webp';
import img6 from '../img/dabur.webp';
import img7 from '../img/humdard.webp';
import img8 from '../img/dhootpapewar.webp';
import img9 from '../img/zandu.webp';
import img10 from '../img/vaidyaShala.webp';
import img11 from '../img/unjha.webp';
import img12 from '../img/vaidyaratnam.webp';
import img13 from '../img/krishnaGopal.webp';

// Imgs

const Brand = ({ logo, name }) => {
  
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13];

  return (
    <div className="grid grid-cols-3 lg:grid-cols-3 gap-6 items-center">
      {images.map(img => <img alt="img" src={img} className="w-5/6 md:w-3/6 mx-auto rounded-xl cursor-pointer scale-110 hover:scale-125 transition-all"/>)}
    </div>
  )
};

export default Brand;