"use client";

import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Member } from "@/types/Member";
import { X } from "lucide-react";

interface FilterDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyFilters: (filters: { country: string[]; planName: string[] }) => void;
  countries: string[];
  memberships: string[];
}

const FilterDialog: React.FC<FilterDialogProps> = ({
  isOpen,
  onClose,
  onApplyFilters,
  countries,
  memberships,
}) => {
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedMemberships, setSelectedMemberships] = useState<string[]>([]);

  useEffect(() => {
    if (!isOpen) {
      // Reset form state when the dialog is closed
      setSelectedCountries([]);
      setSelectedMemberships([]);
    }
  }, [isOpen]);

  const handleCheckboxChange = (
    selectedList: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>,
    value: string
  ) => {
    if (selectedList.includes(value)) {
      setList(selectedList.filter((item) => item !== value));
    } else {
      setList([...selectedList, value]);
    }
  };

  const handleApply = () => {
    onApplyFilters({
      country: selectedCountries,
      planName: selectedMemberships,
    });
    // Reset form immediately after applying filters
    setSelectedCountries([]);
    setSelectedMemberships([]);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <div
          onClick={onClose}
          className="absolute  top-4 cursor-pointer right-3"
        >
          <X size={24} />
        </div>
        <DialogHeader>
          <DialogTitle>Filter Members</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-semibold">Country</h4>
            {countries.map((country) => (
              <div key={country} className="flex items-center space-x-2">
                <Checkbox
                  id={country}
                  onCheckedChange={() =>
                    handleCheckboxChange(
                      selectedCountries,
                      setSelectedCountries,
                      country
                    )
                  }
                  checked={selectedCountries.includes(country)}
                />
                <label htmlFor={country} className="text-sm">
                  {country}
                </label>
              </div>
            ))}
          </div>

          <div>
            <h4 className="text-lg font-semibold">Membership</h4>
            {memberships.map((membership) => (
              <div key={membership} className="flex items-center space-x-2">
                <Checkbox
                  id={membership}
                  onCheckedChange={() =>
                    handleCheckboxChange(
                      selectedMemberships,
                      setSelectedMemberships,
                      membership
                    )
                  }
                  checked={selectedMemberships.includes(membership)}
                />
                <label htmlFor={membership} className="text-sm">
                  {membership}
                </label>
              </div>
            ))}
          </div>
        </div>

        <DialogFooter>
          <Button onClick={handleApply} className="bg-[#efefef] text-black">
            Apply Filters
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FilterDialog;
