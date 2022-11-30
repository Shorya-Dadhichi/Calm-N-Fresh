import React from "react";

const iframe = '<iframe width="100%" height="100%" title="map" class="absolute inset-0" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3471.3803588829096!2d75.03057433047225!3d29.53441559210485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39114de239a14481%3A0xc26aa5262b36e333!2sPunjab%20Medicare!5e0!3m2!1sen!2sin!4v1668104129847!5m2!1sen!2sin" style="filter: grayscale(0) contrast(1.2) opacity(0.);"></iframe>'

  function Iframe(props) {
  return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
}

const Contact = () => {
  return (
    <section className="text-white/40 body-font relative pt-24 pb-12 md:py-32">
        <h1 className="text-type text-4xl md:text-5xl text-center uppercase">Contact Us</h1>
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 rounded-xl overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <Iframe iframe={iframe}/>
          <div className="bg-type relative flex flex-wrap py-6 rounded-xl shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">ADDRESS</h2>
              <p className="mt-1">Punjab Medicare <br/> 14, Jaat Dharmshala Near Old Bus Stand, Sirsa-125055 (Hry)</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">EMAIL</h2>
              <a href="mailto:pmc125055@gmail.com" className="text-secondary leading-relaxed font-bold">pmc125055@gmail.com</a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">PHONE</h2>
              <a href="tel:+919991060450" className="leading-relaxed">999-106-0450</a>
            </div>
          </div>
        </div>
        <div className="text-type lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-lg mb-1 font-medium title-font">Contact us</h2>
          <p className="leading-relaxed mb-5">Drop us a message we will get back to you within 24 hours.</p>
          <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfZ5Ho_ediXy3_vqCmbKrBMRdomOrhtIZRStzCZTPJcaQYavA/formResponse">
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">Name</label>
              <input type="text" id="name" name="entry.2005620554" placeholder="Rajesh Shukla" className="w-full rounded border border-secondary focus:border-secondary focus:ring-2 focus:ring-secondary text-base outline-none text-type py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
              <label htmlFor="text" className="leading-7 text-sm text-gray-400">Number</label>
              <input type="text" id="text" name="entry.1166974658" placeholder="1234569785" className="w-full rounded border border-secondary focus:border-secondary focus:ring-2 focus:ring-secondary text-base outline-none text-type py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
              <textarea id="message" name="entry.839337160" placeholder="Type your message..." className="w-full rounded border border-secondary focus:border-secondary focus:ring-2 focus:ring-secondary h-32 text-base outline-none text-type py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            
            <button type="submit" className="font-medium w-3/6 py-4 bg-gradient-to-tl from-primary to-secondary text-white text-xs lg:text-sm rounded-full transition-all hover:scale-105 hover:tracking-[2px]">Send</button>

          </form>
          <p className="pt-4 text-sm text-type/60">
            Or text us directly on 
            <a className="underline underline-offset-4 pl-2" href="https://wa.me/+919991060450?text=I%20have%20a%20query">WhatsApp <i className="fa-brands fa-whatsapp"></i></a>
          </p>
        </div>
      </div>
    </section>
  )
};

export default Contact;