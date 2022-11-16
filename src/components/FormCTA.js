import React from "react";

const FormCTA = () => {
  return (
    <div className="mx-auto my-12 max-w-screen-xl bg-formcta-bg bg-cover rounded-xl px-4 py-16 sm:px-6 lg:px-8 text-white">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Which product are you looking for?</h1>

        <p className="mt-4 text-white/80">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla
          eaque error neque ipsa culpa autem, at itaque nostrum!
        </p>
      </div>

      <form action="" className="mx-auto mt-8 mb-0 max-w-2xl space-y-4">
        <div>
          <label htmlFor="email" className="font-bold">Name</label>

          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border border-gray-200 p-4 pr-12 text-sm shadow-sm focus:border-type"
              placeholder="Rajesh Shukla"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="font-bold">Product Name</label>
          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border border-gray-200 p-4 pr-12 text-sm shadow-sm focus:border-type"
              placeholder="Ashwagandha"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="font-bold">Brand</label>
          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border border-gray-200 p-4 pr-12 text-sm shadow-sm focus:border-type"
              placeholder="Dabur"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-white/80">
            Questions?
            <a className="underline underline-offset-2" href="tel:+919991060450"> WhatsApp</a>
          </p>

          <button
            type="submit"
            className="ml-3 inline-block font-medium w-2/6 py-4 bg-type text-white text-xs lg:text-sm rounded-full transition-all hover:scale-105 hover:tracking-[2px]"
          >
            Send Request
          </button>
        </div>
      </form>
    </div>

  )
};

export default FormCTA;