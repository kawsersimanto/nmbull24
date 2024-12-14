'use client';

import { Star } from "lucide-react";
import { testimonialsData } from '@/constants/testimonialData';
import style from './testimonial.module.css'
import Image from "next/image";


export default function TestimonialCard() {
  return (
    <div className="relative bg-white rounded-2xl shadow-sm py-4 mt-[50px] min-h-[346px] font-sans">
    {/* Navigation Buttons */}
    <div className="absolute lg:right-4 lg:top-4 -bottom-12 right-4 flex gap-2">
      <button className="w-12 h-7 flex items-center justify-center rounded  border border-gray-200 text-[#0872BA] hover:text-gray-600 hover:border-gray-300 transition-colors" aria-label="Previous testimonial">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0872BA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </button>
      <button className="w-12 h-7 flex items-center justify-center rounded border border-gray-200 text-[#0872BA] hover:text-gray-600 hover:border-gray-300 transition-colors" aria-label="Next testimonial">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0872BA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
      </button>
    </div>
  
    {testimonialsData.map((testimonial, index) => (
      <div key={index} className={`flex flex-col md:flex-row  ${index === 0 ? "block" : "hidden"}`}>
    
        <div className={` p-0 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none ${style.perspectiveCustom }`}>
          <div className="transform" style={{ transform: 'rotateY(30deg)' }}>
          <div className="bg-[#0872BA] shadow-xl rounded-lg px-12 py-3 min-h-[306px] lg:min-w-[444px] flex justify-center items-center">
        <div>
        <div className="relative w-[88px] h-[88px]  mx-auto md:mx-0 mb-4">
              <Image src={testimonial.image} alt={testimonial.name} className="rounded-full object-cover" />
            </div>
            <div className="flex items-center gap-1 mb-2 justify-center lg:absolute lg:top-6 lg:right-8">
              <Star className="w-4 h-4 fill-white text-white" />
              <span className="text-white font-medium">{testimonial.rating}</span>
            </div>
            <h3 className="text-[24px] font-semibold text-center md:text-left mb-2 text-white">{testimonial.name}</h3>
            <div className="text-blue-100 text-sm text-center md:text-left">
              <p className="mb-1 text-[18px] leading-6 text-gray-50 font-[400]">{[testimonial.occupation, ...testimonial.details].join(" • ")}</p>
              <p className="text-[18px] leading-6 font-[400] text-gray-50">{testimonial.location}</p>
              <p className="text-[18px] leading-6 font-[400] text-gray-50">{testimonial.date}</p>
            </div>
        </div>
          </div>
          </div>
        </div>
  
        {/* Right Card */}
        <div className="p-8 md:pl-20 flex-1 flex items-center">
          
          <p className="text-gray-600 text-lg italic">{testimonial.quote}</p>
        </div>
      </div>
    ))}
  </div>
  
  );
}
