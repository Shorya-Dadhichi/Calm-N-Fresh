import React from "react";

const iframe = '<iframe width="100%" height="100%" title="map" class="absolute inset-0" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3471.3803588829096!2d75.03057433047225!3d29.53441559210485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39114de239a14481%3A0xc26aa5262b36e333!2sPunjab%20Medicare!5e0!3m2!1sen!2sin!4v1668104129847!5m2!1sen!2sin" style="filter: grayscale(0) contrast(1.2) opacity(0.);"></iframe>'

  function Iframe(props) {
  return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
}

const Contact = () => {
  return (
    <section class="text-white/40 body-font relative py-32">
        <h1 className="text-type text-4xl md:text-5xl text-center uppercase">Contact Us</h1>
      <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div class="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <Iframe iframe={iframe}/>
          <div class="bg-type relative flex flex-wrap py-6 rounded shadow-md">
            <div class="lg:w-1/2 px-6">
              <h2 class="title-font font-semibold text-white tracking-widest text-xs">ADDRESS</h2>
              <p class="mt-1">Punjab Medicare <br/> 14, Jaat Dharmshala Near Old Bus Stand, Sirsa-125055 (Hry)</p>
            </div>
            <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 class="title-font font-semibold text-white tracking-widest text-xs">EMAIL</h2>
              <a href="mailto:punjabmeicare@gmail.com" class="text-secondary leading-relaxed font-bold">punjabmeicare@gmail.com</a>
              <h2 class="title-font font-semibold text-white tracking-widest text-xs mt-4">PHONE</h2>
              <a href="tel:+919991060450" class="leading-relaxed">999-106-0450</a>
            </div>
          </div>
        </div>
        <div class="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 class="text-white text-lg mb-1 font-medium title-font">Feedback</h2>
          <p class="leading-relaxed mb-5">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
          <div class="relative mb-4">
            <label htmlFor="name" class="leading-7 text-sm text-gray-400">Name</label>
            <input type="text" id="name" name="name" class="w-full rounded border border-secondary focus:border-secondary focus:ring-2 focus:ring-secondary text-base outline-none text-type py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <div class="relative mb-4">
            <label htmlFor="email" class="leading-7 text-sm text-gray-400">Email</label>
            <input type="email" id="email" name="email" class="w-full rounded border border-secondary focus:border-secondary focus:ring-2 focus:ring-secondary text-base outline-none text-type py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <div class="relative mb-4">
            <label htmlFor="message" class="leading-7 text-sm text-gray-400">Message</label>
            <textarea id="message" name="message" class="w-full rounded border border-secondary focus:border-secondary focus:ring-2 focus:ring-secondary h-32 text-base outline-none text-type py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
          <button class="font-medium w-3/6 py-4 bg-gradient-to-tl from-primary to-secondary text-white text-xs lg:text-sm rounded-full transition-all hover:scale-105 hover:tracking-[2px]">Send</button>
          <p class="text-xs text-gray-400 text-opacity-90 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
        </div>
      </div>
    </section>
  )
};

export default Contact;