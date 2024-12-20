import React from 'react'
import { categories } from "@/constants/categories";


export const MyTopView = () => {
  return (
    <div>
        <section>
        <div className="mt-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-center md:text-left">
            My Top 3&apos;s
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm"
              >
                <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-sans font-semibold mb-2">
                  {category.title}
                </h3>
                <ul className="flex justify-between text-gray-600">
                  {category.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-[16px] sm:text-[18px] md:text-[18px] text-[#475467] font-normal font-sans"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
