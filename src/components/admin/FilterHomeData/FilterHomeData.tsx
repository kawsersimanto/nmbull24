"use client";

import React, { useState, useEffect } from "react";
import { Table, TableBody } from "@/components/ui/table";
import MemberTableRow from "@/components/admin/Sidebar/MemberTableRow";
import { Members } from "@/constants/members";

import SearchBox from "./SearchBox";
import { Member } from "@/types/Member";
import { LiaSearchSolid, LiaFilterSolid } from "react-icons/lia";
import FilterDialog from "./FilterDialog";
import { SlRefresh } from "react-icons/sl";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FilterHomeData = () => {
  const [searchBoxOpen, setSearchBoxOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filterBoxOpen, setFilterBoxOpen] = useState<boolean>(false);
  const [filteredData, setFilteredData] = useState<Member[]>(Members);
  const [activeFilters, setActiveFilters] = useState<{
    country: string[];
    membership: string[];
  }>({
    country: [],
    membership: [],
  });

  // Pagination state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(3);

  // Get unique countries and memberships from Members data
  const uniqueCountries = Array.from(
    new Set(Members.map((member) => member.country))
  );
  const uniqueMemberships = Array.from(
    new Set(Members.map((member) => member.membership))
  );

  // Handle search query
  const handleSearch = (query: string) => {
    setSearchQuery(query); // Update the search query
    setSearchBoxOpen(false); // Close the search dialog after searching
    setCurrentPage(1); // Reset to the first page
  };

  // Handle filter application
  const handleFilters = (filters: {
    country: string[];
    membership: string[];
  }) => {
    setActiveFilters(filters); // Update filters state
    setCurrentPage(1); // Reset to the first page
  };

  // Combine search and filter logic
  useEffect(() => {
    let data = Members;

    // Apply search filter
    if (searchQuery) {
      data = data.filter(
        (member) =>
          member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          member.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
          member.membership.toLowerCase().includes(searchQuery.toLowerCase()) ||
          member.accumendation
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          member.capital.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply country and membership filters
    if (activeFilters.country.length > 0) {
      data = data.filter((member) =>
        activeFilters.country.includes(member.country)
      );
    }
    if (activeFilters.membership.length > 0) {
      data = data.filter((member) =>
        activeFilters.membership.includes(member.membership)
      );
    }

    setFilteredData(data);
  }, [searchQuery, activeFilters]);

  // Handle changing items per page
  const handleItemsPerPageChange = (value: string) => {
    setItemsPerPage(Number(value));
    setCurrentPage(1); // Reset to the first page
  };

  // Calculate pagination data
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Generate pagination numbers
  const getPaginationNumbers = () => {
    const visiblePages = 4; // Number of visible pages before the ellipsis
    const paginationNumbers: (number | string)[] = [];

    // Show ellipsis if pages exceed the visible range
    if (totalPages > visiblePages) {
      if (currentPage > 3) {
        paginationNumbers.push(1, 2, "...");
      }

      for (
        let i = Math.max(1, currentPage - 1);
        i <= Math.min(totalPages, currentPage + 1);
        i++
      ) {
        paginationNumbers.push(i);
      }

      if (currentPage < totalPages - 2) {
        paginationNumbers.push("...", totalPages);
      }
    } else {
      for (let i = 1; i <= totalPages; i++) {
        paginationNumbers.push(i);
      }
    }

    return paginationNumbers;
  };

  return (
    <>
      <div className="flex justify-between items-center flex-shrink-0">
        <h4 className="md:text-2xl text-xl">Membership</h4>

        <div className="flex gap-2 md:gap-4 items-center">
          <LiaSearchSolid
            className="cursor-pointer md:text-xl"
            onClick={() => setSearchBoxOpen(true)} // Open the search dialog
          />
          <LiaFilterSolid
            className="cursor-pointer md:text-xl"
            onClick={() => setFilterBoxOpen(true)} // Open the filter dialog
          />
          <SlRefresh
            className="cursor-pointer md:text-xl"
            onClick={() => {
              setSearchQuery("");
              setActiveFilters({ country: [], membership: [] });
              setCurrentPage(1);
            }}
          />

          {/* Border */}
          <div className="h-[30px] border-r "></div>

          {/* Pagination Selection */}
          <Select onValueChange={handleItemsPerPageChange}>
            <SelectTrigger className="md:w-[100px] w-[50px]">
              <SelectValue placeholder={`${itemsPerPage}`} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={itemsPerPage.toString()}>
                {itemsPerPage}
              </SelectItem>
              <SelectItem value={(itemsPerPage * 2).toString()}>
                {itemsPerPage * 2}
              </SelectItem>
              <SelectItem value={(itemsPerPage * 3).toString()}>
                {itemsPerPage * 3}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Search Result Message */}
      {searchQuery && (
        <div className="">
          <p className="text-lg py-3">
            Search results for:{" "}
            <span className="font-bold">
              {searchQuery.charAt(0).toUpperCase() + searchQuery.slice(1)}
            </span>
          </p>
        </div>
      )}

      {/* Filtered Members Table */}
      <div className="">
        <Table>
          <TableBody>
            {paginatedData.length > 0 ? (
              paginatedData.map((member, idx) => (
                <MemberTableRow key={idx} member={member} />
              ))
            ) : (
              <div className="">
                <p className="text-red-500">Oops! No member available</p>
              </div>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center py-4">
        <button
          className="md:px-4 px-2 text-xs md:text-lg py-2 text-white bg-gray-600 rounded disabled:opacity-50"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </button>
        <div className="flex gap-2 mx-4">
          {getPaginationNumbers().map((page, idx) =>
            page === "..." ? (
              <span key={idx} className="px-2">
                ...
              </span>
            ) : (
              <button
                key={idx}
                className={`md:px-4 px-2 text-xs md:text-lg py-2 rounded ${
                  page === currentPage
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setCurrentPage(Number(page))}
              >
                {page}
              </button>
            )
          )}
        </div>
        <button
          className="md:px-4 px-2 text-xs md:text-lg py-2 text-white bg-gray-600 rounded disabled:opacity-50"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>

      {/* Filter Dialog */}
      <FilterDialog
        isOpen={filterBoxOpen}
        onClose={() => setFilterBoxOpen(false)}
        onApplyFilters={handleFilters}
        countries={uniqueCountries}
        memberships={uniqueMemberships}
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
