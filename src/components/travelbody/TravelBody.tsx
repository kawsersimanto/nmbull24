import React from 'react';
import TravelCard from '../travelCard/TravelCard';
import { Testimonial } from '../home/testimonial/Testimonial';

interface SearchResult {
  id: string;
  name: string;
  age: number;
  travelType: string;
  travelDate: string;
  destination: string;
  imageUrl: string;
}

const searchResults: SearchResult[] = [
  {
    id: "1",
    name: "Sarah Thompson",
    age: 25,
    travelType: "Scouting Trip (1-6 weeks)",
    travelDate: "May 2024",
    destination: "Tanzania",
    imageUrl: "https://i.ibb.co.com/FwhwTLJ/image-2.png",
  },
  {
    id: "2",
    name: "Emily Johnson",
    age: 28,
    travelType: "Volunteer Work (3-6 months)",
    travelDate: "July 2024",
    destination: "India",
    imageUrl: "https://i.ibb.co.com/FwhwTLJ/image-2.png",
  },
  {
    id: "3",
    name: "Jessica Brown",
    age: 30,
    travelType: "Language Immersion (6-12 months)",
    travelDate: "August 2024",
    destination: "Spain",
    imageUrl: "https://i.ibb.co.com/FwhwTLJ/image-2.png",
  },
  {
    id: "4",
    name: "Alice Green",
    age: 22,
    travelType: "Cultural Exchange (1-3 months)",
    travelDate: "June 2024",
    destination: "Japan",
    imageUrl: "https://i.ibb.co.com/FwhwTLJ/image-2.png",
  },
  {
    id: "5",
    name: "Mia White",
    age: 27,
    travelType: "Adventure Trip (1-3 weeks)",
    travelDate: "April 2024",
    destination: "Peru",
    imageUrl: "https://i.ibb.co.com/FwhwTLJ/image-2.png",
  },
  {
    id: "6",
    name: "Olivia Blue",
    age: 24,
    travelType: "Gap Year (6-12 months)",
    travelDate: "September 2024",
    destination: "Australia",
    imageUrl: "https://i.ibb.co.com/FwhwTLJ/image-2.png",
  },
];

const TravelBody = () => {
  return (
    <div className="container mt-20 px-4 sm:px-6 lg:px-8">
      <div className="w-12 h-2 bg-[#0872BA] mx-auto lg:mx-0"></div>
      <div className="font-sans text-5xl font-semibold mt-2 text-[#1D2939]">
        <h1>Some of our verified members</h1>
        <p className="font-sans text-xl font-medium mt-4 text-[#344054]">
        you&apos;re not just finding a housemate - you&apos;re building a support system. The women you meet here share your passion for exploring new cultures, experiencing life abroad, and making the most of every opportunity. Plus, by teaming up with someone on the same journey, you&apos;ll find a sense of safety, security, and camaraderie that helps you stay motivated and focused on your goals.
</p>
      </div>

      <div className="mx-auto p-4">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {searchResults.map((result) => (
            <TravelCard key={result.id} {...result} />
          ))}
        </div>
      </div>
      <div className=" mx-auto mt-[78px] text-center">
        <div className="inline-block bg-[#0872BA4D] text-black px-4 py-2 -rotate-6 rounded-full text-sm mb-6 font-sans">
          Testimonial
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-sans">
        Feelings of our traveler
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-sans">
  Find the perfect room to share with travelers heading to the same destination.
        </p>   
        <Testimonial></Testimonial>
      </div>
    </div>
  );
};

export default TravelBody;
