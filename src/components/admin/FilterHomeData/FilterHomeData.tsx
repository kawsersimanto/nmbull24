"use client";

import React, { useState, useEffect } from "react";
import { Table, TableBody } from "@/components/ui/table";
import MemberTableRow from "@/components/admin/Sidebar/MemberTableRow";
import SearchBox from "./SearchBox";
import FilterDialog from "./FilterDialog";
// Import the interface and enums
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import searchSvg from "@/assets/dashboard/Search.svg";
import refreshSvg from "@/assets/dashboard/Refresh.svg";
import filterSvg from "@/assets/dashboard/Adjustments.svg";
import { useAllMemberQuery } from "@/redux/Api/memberApi";
import { Member } from "@/types/Member";

const FilterHomeData: React.FC = () => {
  const { data: MemberData, isLoading, isError } = useAllMemberQuery(undefined);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchBoxOpen, setSearchBoxOpen] = useState<boolean>(false);
  const [filterBoxOpen, setFilterBoxOpen] = useState<boolean>(false);
  const [filteredData, setFilteredData] = useState<Member[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(3);

  const [activeFilters, setActiveFilters] = useState<{
    country: string[];
    planName: string[];
  }>({
    country: [],
    planName: [],
  });

  const members: Member[] = MemberData?.data || [];
  console.log(members);
  const uniqueCountries = Array.from(
    new Set(members.map((member) => member.country || ""))
  ).filter((country) => country !== "");

  const uniquePlanNames = Array.from(
    new Set(members.map((member) => member.planName || ""))
  ).filter((planName) => planName !== "");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
    setSearchBoxOpen(false);
  };

  const handleFilters = (filters: {
    country: string[];
    planName: string[];
  }) => {
    setActiveFilters(filters);
    setCurrentPage(1);
  };

  useEffect(() => {
    let data = [...members];

    if (searchQuery) {
      data = data.filter(
        (member) =>
          member.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          member.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (member.country &&
            member.country.toLowerCase().includes(searchQuery.toLowerCase())) ||
          (member.state &&
            member.state.toLowerCase().includes(searchQuery.toLowerCase())) ||
          (member.planName &&
            member.planName.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    if (activeFilters.country.length > 0) {
      data = data.filter(
        (member) =>
          member.country && activeFilters.country.includes(member.country)
      );
    }
    if (activeFilters.planName.length > 0) {
      data = data.filter(
        (member) =>
          member.planName && activeFilters.planName.includes(member.planName)
      );
    }

    // Avoid unnecessary state update
    if (JSON.stringify(data) !== JSON.stringify(filteredData)) {
      setFilteredData(data);
    }
  }, [searchQuery, activeFilters, members]);

  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handleItemsPerPageChange = (value: string) => {
    setItemsPerPage(Number(value));
    setCurrentPage(1);
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h4 className="text-2xl">Member List</h4>
        <div className="flex items-center gap-2">
          <Image
            src={searchSvg}
            alt="Search"
            onClick={() => {
              setSearchQuery("");
              setSearchBoxOpen(true);
            }}
            className="cursor-pointer"
          />

          <Image
            src={filterSvg}
            alt="Filter"
            onClick={() => setFilterBoxOpen(true)}
            className="cursor-pointer"
          />
          <Image
            src={refreshSvg}
            alt="Refresh"
            onClick={() => {
              setSearchQuery("");
              setActiveFilters({ country: [], planName: [] });
              setCurrentPage(1);
            }}
            className="cursor-pointer"
          />
          <Select onValueChange={handleItemsPerPageChange}>
            <SelectTrigger>
              <SelectValue placeholder="Items per page" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="6">6</SelectItem>
              <SelectItem value="9">9</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="py-5">
        <Table>
          <TableBody>
            {paginatedData.length > 0 ? (
              paginatedData.map((member) => (
                <MemberTableRow key={member.id} member={member} />
              ))
            ) : (
              <tr>
                <td colSpan={100} className="text-center text-red-500">
                  No members found.
                </td>
              </tr>
            )}
          </TableBody>
        </Table>
      </div>

      {/* pagination */}
      <div className="flex items-center  gap-2">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <FaArrowLeft />
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-8 h-8 rounded-full ${
              page === currentPage
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {page}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <FaArrowRight />
        </button>
      </div>

      {/* filter Dialog */}
      <FilterDialog
        isOpen={filterBoxOpen}
        onClose={() => setFilterBoxOpen(false)}
        onApplyFilters={handleFilters}
        countries={uniqueCountries}
        memberships={uniquePlanNames}
      />

      {/* Search Dialog */}
      <SearchBox
        isOpen={searchBoxOpen}
        onClose={() => setSearchBoxOpen(false)} // Close search dialog
        onSearch={handleSearch} // Trigger search
      />
    </>
  );
};

export default FilterHomeData;
