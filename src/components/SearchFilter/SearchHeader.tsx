"use client"

import { Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import FilterPanel from './FilterPanel'
import { SearchCard } from '../searchResultCard/SearchCard'


export default function SearchHeader() {

  return (
    <div className='mt-[188px] container'>
      <h1 className="font-sans text-5xl font-semibold">
        Let&apos;s narrow{" "}
        <span className="text-primary">your search</span>
      </h1>
        <div className="mx-auto mt-7 bg-[#FFF] rounded-2xl">
      <div className="p-6">
        <div className="flex justify-start gap-8 items-center">
          {/* Search by country */}
          <Select >
            <SelectTrigger className="w-[288px]  h-[63px] bg-white flex items-center justify-between">
              <div className="text-xs  text-gray-500">Search by country</div>
              <SelectValue placeholder="" />
              <span className="text-gray-500">{/* Down arrow icon */}</span>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="africa">Africa</SelectItem>
              <SelectItem value="asia">Asia</SelectItem>
              <SelectItem value="europe">Europe</SelectItem>
              <SelectItem value="namerica">North America</SelectItem>
              <SelectItem value="samerica">South America</SelectItem>
              <SelectItem value="oceania">Oceania</SelectItem>
            </SelectContent>
          </Select>

          {/* State */}
          <Select>
            <SelectTrigger className="w-[284px] h-[63px] bg-white flex items-center justify-between">
              <div className="text-xs text-gray-500">State</div>
              <SelectValue placeholder="" />
              <span className="text-gray-500">{/* Down arrow icon */}</span>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="al">Alabama (AL)</SelectItem>
              <SelectItem value="ak">Alaska (AK)</SelectItem>
              <SelectItem value="az">Arizona (AZ)</SelectItem>
              <SelectItem value="ar">Arkansas (AR)</SelectItem>
              {/* Add more states as needed */}
            </SelectContent>
          </Select>

          <div className="">
            <p className="text-sm font-medium max-w-[86px] text-gray-500">AND/OR</p>
          </div>

          {/* Business */}
          <Select>
            <SelectTrigger className="w-[330px] h-[63px] bg-white flex items-center justify-between">
              <div className="text-xs text-gray-500">Business</div>
              <SelectValue placeholder="" />
              <span className="text-gray-500">{/* Down arrow icon */}</span>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="accounting">Accounting & Finance</SelectItem>
              <SelectItem value="technology">Technology</SelectItem>
              <SelectItem value="healthcare">Healthcare</SelectItem>
              <SelectItem value="education">Education</SelectItem>
              {/* Add more business types as needed */}
            </SelectContent>
          </Select>
        </div>
         <hr className='mt-7 mb-5' />
        <div className="">
          <label className="text-sm font-medium text-gray-700">
            Travel Begins(MM/YY)
          </label>
          <div className="flex gap-4">
            <Select>
              <SelectTrigger className="w-[254px] h-[50px] bg-white flex items-center justify-between">
                <div className="text-xs text-gray-500">Month</div>
                <SelectValue placeholder="" />
                <span className="text-gray-500">{/* Down arrow icon */}</span>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">January</SelectItem>
                <SelectItem value="2">February</SelectItem>
                <SelectItem value="3">March</SelectItem>
                <SelectItem value="4">April</SelectItem>
                <SelectItem value="5">May</SelectItem>
                <SelectItem value="6">June</SelectItem>
                <SelectItem value="7">July</SelectItem>
                <SelectItem value="8">August</SelectItem>
                <SelectItem value="9">September</SelectItem>
                <SelectItem value="10">October</SelectItem>
                <SelectItem value="11">November</SelectItem>
                <SelectItem value="12">December</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex items-center gap-2">
              <Input 
                type="text" 
                placeholder="Year" 
                className="w-[240px] h-[50px] bg-white" 
              />
              <Button 
                size="icon" 
                className="bg-primary hover:bg-blue-700"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='flex justify-between'>
      <FilterPanel/>
      <SearchCard/>
    </div>
    </div>
  )
}
