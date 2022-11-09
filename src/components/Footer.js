import React from "react";

// Imgs

const Footer = () => {
  return (
    <section className="bg-secondary text-white">
      <article className="max-w-screen-xl mx-auto py-12 md:flex justify-center gap-64 items-center">
        <div>
          <h2 className="font-semibold text-3xl uppercase">Punjab Medicare</h2>
        </div>

        <div>
          <article className="space-y-6">
            <div className="font-medium list-none flex gap-4">
              <a href='/' className="py-2 px-4 font-medium cursor-pointer text-neutral hover:text-type transition-colors">Home</a>
              <a href='/products' className="py-2 px-4 font-medium cursor-pointer text-neutral hover:text-type transition-colors">Products</a>
              <a href='/about' className="py-2 px-4 font-medium cursor-pointer text-neutral hover:text-type transition-colors">About</a>
              <a href='/contact' className="py-2 px-4 font-medium cursor-pointer text-neutral hover:text-type transition-colors">Contact</a>
            </div>
            <hr />
            <div className="flex justify-between gap-24">
              <p>Copyright © 2022 Punjab Medicare, All rights reserved</p>
              <div className="text-2xl space-x-6">
                <a href="/"><i className="fa-brands fa-instagram hover:text-type transition-colors"></i></a>
                <a href="/"><i className="fa-brands fa-facebook-f hover:text-type transition-colors"></i></a>              
              </div>
            </div>
          </article>
        </div>

      </article>
        <h2 className="text-center pb-8">Site by <a href="https://varunbhabhra.com/" className="font-semibold hover:text-type underline underline-offset-4">Varun Bhabhra <i className="fa-solid fa-link"></i></a></h2>
    </section>
  )
};

export default Footer;