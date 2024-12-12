import React from 'react'
import { WhyChooseCard } from './WhyChooseCard'

export const WhyChoose = () => {
  return (

     <section className="container bg-slate-50 py-16 px-4 mt-16">
      <div className=" mx-auto text-center">
        <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 -rotate-6 rounded-full text-sm mb-6 font-sans">
          Why choose us?
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-sans">
          Why Choose Expat Global Girls
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-sans">
          Empowering women to travel with confidence and ease worldwide
        </p>
      </div>
      <WhyChooseCard/>

    </section>

  )
}
