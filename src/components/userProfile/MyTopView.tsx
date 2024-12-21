"use client"
import { useGetMyTopQuery } from '@/redux/Api/myTopApi';
import React from 'react'

// Define types for the API response
interface MyTopData {
  personality: string[];
  philosophies: string[];
  goals: string[];
  hobbies: string[];
  socialGroups: string[];
  foodieFan: string[];
  musicTastes: string[];
}

// Define the type for the categories
interface Category {
  title: string;
  items: string[];
}

// The MyTopView component
export const MyTopView = () => {
  // Destructure the hook result to get the data, isLoading, and isError
  const { data, isLoading, isError } = useGetMyTopQuery(undefined);
  
  // Check if data exists and access the first item in the array
  const myTopData = data?.data?.[0]; // Make sure to access `data` and then the first item in the array
  console.log('API Response:', data);

  // Array of categories and their respective items
  const categories: Category[] = [
    { title: "Personality", items: myTopData?.personality || [] },
    { title: "Philosophies", items: myTopData?.philosophies || [] },
    { title: "Goals", items: myTopData?.goals || [] },
    { title: "Hobbies", items: myTopData?.hobbies || [] },
    { title: "Social Groups", items: myTopData?.socialGroups || [] },
    { title: "Foodie Fan", items: myTopData?.foodieFan || [] },
    { title: "Music Tastes", items: myTopData?.musicTastes || [] }
  ];

  // If loading or error, you can handle these cases
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading data.</div>;

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
  );
}
