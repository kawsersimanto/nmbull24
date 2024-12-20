import React from 'react'

import Link from "next/link";


export const LifeStyleView = () => {
  return (
    <div>


           {/* Lifestyle Section */}
              <section className="mt-16">
                <h2 className="text-xl font-semibold mb-6">Lifestyle</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                  <div className="col-span-1">
                    <h3 className="text-[#344054] font-sans font-semibold text-[18px] leading-[22.32px] mb-1">
                      Max Monthly Rent
                    </h3>
                    <p className="text-[#475467] font-sans text-[18px] font-normal leading-[30px]">
                      $23
                    </p>
                  </div>
                  <div className="col-span-1">
                    <h3 className="text-[#344054] font-sans font-semibold text-[18px] leading-[22.32px] mb-1">
                      Marital Status
                    </h3>
                    <p className="text-[#475467] font-sans text-[18px] font-normal leading-[30px]">
                      Unmarried
                    </p>
                  </div>
                  <div className="col-span-1">
                    <h3 className="text-[#344054] font-sans font-semibold text-[18px] leading-[22.32px] mb-1">
                      Ethnicity
                    </h3>
                    <p className="text-[#475467] font-sans text-[18px] font-normal leading-[30px]">
                      Chinese
                    </p>
                  </div>
                  <div className="col-span-1">
                    <h3 className="text-[#344054] font-sans font-semibold text-[18px] leading-[22.32px] mb-1">
                      Religion/Spirituality
                    </h3>
                    <p className="text-[#475467] font-sans text-[18px] font-normal leading-[30px]">
                      Christianity
                    </p>
                  </div>
                  <div className="col-span-1">
                    <h3 className="text-[#344054] font-sans font-semibold text-[18px] leading-[22.32px] mb-1">
                      Children
                    </h3>
                    <p className="text-[#475467] font-sans text-[18px] font-normal leading-[30px]">
                      No
                    </p>
                  </div>
                  <div className="col-span-1">
                    <h3 className="text-[#344054] font-sans font-semibold text-[18px] leading-[22.32px] mb-1">
                      Pets
                    </h3>
                    <p className="text-[#475467] font-sans text-[18px] font-normal leading-[30px]">
                      No
                    </p>
                  </div>
                  <div className="col-span-1">
                    <h3 className="text-[#344054] font-sans font-semibold text-[18px] leading-[22.32px] mb-1">
                      Employment Status
                    </h3>
                    <p className="text-[#475467] font-sans text-[18px] font-normal leading-[30px]">
                      Unmarried
                    </p>
                  </div>
                  <div className="col-span-1">
                    <h3 className="text-[#344054] font-sans font-semibold text-[18px] leading-[22.32px] mb-1">
                      Education
                    </h3>
                    <p className="text-[#475467] font-sans text-[18px] font-normal leading-[30px]">
                      No
                    </p>
                  </div>
                </div>
              </section>
              <section className="mt-16">
                <h2 className="text-xl font-semibold mb-6">My Business</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                  <div className="col-span-1">
                    <h3 className="text-[#344054] font-sans font-semibold text-[18px] leading-[22.32px] mb-1">
                      Industry
                    </h3>
                    <p className="text-[#475467] font-sans text-[18px] font-normal leading-[30px]">
                      IT
                    </p>
                  </div>
                  <div className="col-span-1">
                    <h3 className="text-[#344054] font-sans font-semibold text-[18px] leading-[22.32px] mb-1">
                      Company Name
                    </h3>
                    <p className="text-[#475467] font-sans text-[18px] font-normal leading-[30px]">
                      IT meta solution
                    </p>
                  </div>
                </div>
              </section>
              <section className="mt-16">
                <h2 className="text-xl font-semibold mb-6">Description of Services</h2>
                <textarea
                  placeholder="Please share here.."
                  className="w-full min-h-[120px] p-3 bg-gray-100 border border-gray-300 rounded-lg text-[#475467] font-sans text-[16px] resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </section>
              <section className="mt-16">
                <h2 className="text-[18px] font-semibold mb-3 font-sans">
                  Visit us online
                </h2>
                <div className="flex flex-col">
                  <div>
                    <Link
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="mr-[55px] cursor-pointer underline text-primary font-sans font-medium text-[18px]">
                        Facebook
                      </span>
                    </Link>
                    <Link
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="mr-[55px] cursor-pointer underline text-primary font-sans font-medium text-[18px]">
                        Youtube
                      </span>
                    </Link>
                    <Link
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="mr-[55px] cursor-pointer underline text-primary font-sans font-medium text-[18px]">
                        Linkedin
                      </span>
                    </Link>
                  </div>
                  <div className="mt-6">
                    <Link
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="mr-[55px] cursor-pointer underline text-primary font-sans font-medium text-[18px]">
                        Instagram
                      </span>
                    </Link>
                    <Link
                      href="https://yourwebsite.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="mr-[55px] cursor-pointer underline text-primary font-sans font-medium text-[18px]">
                        Website
                      </span>
                    </Link>
                  </div>
                </div>
              </section>
        
    </div>
  )
}
