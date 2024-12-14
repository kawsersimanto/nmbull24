import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

export default function FilterPanel() {
  const [monthlyRent, setMonthlyRent] = React.useState([3000]);
  const [fromYear, setFromYear] = React.useState<number | string>('');
  const [toYear, setToYear] = React.useState<number | string>('');

  return (
    <div className="rounded-2xl px-3 py-6 bg-white max-w-[354px] mt-[55px]">
      <h2 className="text-2xl text-[#263238] font-semi font-sans">FILTER BY :</h2>

      {/* Travel Type */}
      <div className="space-y-4">
        <h3 className="font-medium mt-10 text-[18px] font-semi text-[#263238]">
          Travel Type
        </h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="scouting" />
            <Label htmlFor="scouting">Scouting Trip (1-8 wks)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="slow-travel" />
            <Label htmlFor="slow-travel">Slow Travel (2 mos - 6 mos)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="long-term" />
            <Label htmlFor="long-term">Long Term (6 mos - 1 yr)</Label>
          </div>
        </div>
      </div>

      {/* Members arriving */}
      <div>
        <h3 className="font-medium mt-10 text-[18px] font-semi text-[#263238]">Members arriving between</h3>
        <div className="grid gap-4">
          <div className="flex gap-5 items-center mt-5">
            <Select>
              <SelectTrigger className="w-[154px] h-[50px]">
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="jan">January</SelectItem>
                <SelectItem value="feb">February</SelectItem>
              </SelectContent>
            </Select>
            {/* Replace year dropdown with number input */}
            <input
              type="text"
              value={fromYear}
              onChange={(e) => setFromYear(e.target.value)}
              placeholder="Year"
              className="w-[154px] h-[46px] border border-gray-300 rounded-md p-2"
            />
          </div>
          <p className="text-center text-sm text-gray-500">To</p>
          <div className="flex gap-5 items-center">
            <Select>
              <SelectTrigger className="w-[154px] h-[50px]">
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="jan">January</SelectItem>
                <SelectItem value="feb">February</SelectItem>
              </SelectContent>
            </Select>
            {/* Replace year dropdown with number input */}
            <input
              type="text"
              value={toYear}
              onChange={(e) => setToYear(e.target.value)}
              placeholder="Year"
              className="w-[154px] h-[46px] border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>
      </div>

      {/* Max Monthly Rent */}
      <div className="space-y-4">
        <h3 className="font-medium mt-10 text-[18px] font-semi text-[#263238]">Max monthly rent</h3>
        <div className="relative w-full h-2">
          {/* Dynamically positioned slider value */}
          <div
            className="absolute -top-1 text-sm font-medium text-[16px] text-[#344054]"
            style={{
              left: `${(monthlyRent[0] / 5000) * 100}%`,
              transform: "translateX(-50%)",
            }}
          >
            {monthlyRent}
          </div>
        </div>
        <Slider
          value={monthlyRent}
          onValueChange={setMonthlyRent}
          max={5000}
          step={100}
          className="relative"
        />
      </div>

      {/* Age */}
      <div className="">
        <h3 className="font-bold mt-10 text-[16px] mb-3 font-semi text-[#000]">Age</h3>
        <div className="grid grid-cols-2 gap-4">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="From" />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 83 }, (_, i) => i + 18).map((age) => (
                <SelectItem key={age} value={age.toString()}>
                  {age}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="To" />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 83 }, (_, i) => i + 18).map((age) => (
                <SelectItem key={age} value={age.toString()}>
                  {age}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Member has accommodations */}
      <div className="space-y-4">
        <h3 className="font-medium mt-10 text-[18px] font-semi text-[#263238]">Member has accommodations</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="has-accommodations-yes" />
            <Label htmlFor="has-accommodations-yes">Yes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="has-accommodations-no" />
            <Label htmlFor="has-accommodations-no">No</Label>
          </div>
        </div>
      </div>

      {/* Group membership */}
      <div className="space-y-4">
        <h3 className="font-medium mt-10 text-[18px] font-semi text-[#263238]">Group membership</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="blank" />
            <Label htmlFor="blank">&lt;Blank&gt;</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="exodus" />
            <Label htmlFor="exodus">ExodUS Summit</Label>
          </div>
        </div>
      </div>
    </div>
  );
}
