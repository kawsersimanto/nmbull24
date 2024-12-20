import Image from 'next/image'
import React from 'react'
import logo from "@/assets/profile/tabler_edit.png";


export const DestinationView = () => {
  return (
    <section>
        <h2 className="text-xl font-semibold mb-4 mt-[68px] text-center md:text-left">
          My Destinations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {[1, 2, 3].map((option) => (
            <div
              key={option}
              className="max-w-full sm:max-w-[383px] border border-solid border-gray-300 rounded-xl p-[14px]"
            >
              <div className="flex items-center justify-between">
                <div className="text-[#1D2939] font-semibold font-sans text-[16px] sm:text-[18px]">
                  <h2># Option {option}</h2>
                </div>
                <div>
                  <button className="flex items-center justify-center gap-2 px-2 py-1 border border-solid border-gray-300 rounded-lg">
                    <Image src={logo} alt="Update icon" />
                    Update
                  </button>
                </div>
              </div>
              <hr className="bg-gray-300 mt-3" />
              <div>
                <p className="font-sans text-[#344054] font-medium text-[16px] sm:text-[18px] mt-4">
                  My travel type:{" "}
                  <span className="text-[#475467] font-normal">
                    Scouting Trip (1-8 wks)
                  </span>
                </p>
                <p className="font-sans text-[#344054] font-medium text-[16px] sm:text-[18px] mt-4">
                  My travel begins:{" "}
                  <span className="text-[#475467] font-normal">May 2024</span>
                </p>
                <p className="font-sans text-[#344054] font-medium text-[16px] sm:text-[18px] mt-4">
                  Destination country:{" "}
                  <span className="text-[#475467] font-normal">Australia</span>
                </p>
                <p className="font-sans text-[#344054] font-medium text-[16px] sm:text-[18px] mt-4">
                  Destination city:{" "}
                  <span className="text-[#475467] font-normal">Sydney</span>
                </p>
                <p className="font-sans text-[#344054] font-medium text-[16px] sm:text-[18px] mt-4">
                  Have room:{" "}
                  <span className="text-[#475467] font-normal">Yes</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
  )
}
