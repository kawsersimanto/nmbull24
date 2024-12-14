
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React from "react";
import { FaCodeCompare } from "react-icons/fa6";
import {
  LiaFilterSolid,
  LiaSearchSolid,
} from "react-icons/lia";

import {
  Table,
  TableBody,
} from "@/components/ui/table";
import { Members } from "@/constants/members";
import MemberTableRow from "@/components/admin/Sidebar/MemberTableRow";
import MobileNavbar from "@/components/admin/MobileNavbar/MobileNavbar";

const AdminHomePage = () => {
  return (
    <div className="bg-slate-100 p-4 rounded-lg">
      {/* page header */}
      <div className="flex justify-between items-center flex-shrink-0 ">
        <h4 className="md:text-2xl text-xl">Membership</h4>
        <div className="flex gap-2 items-center ">
          <div className="md:flex gap-2 items-center hidden ">
            <LiaSearchSolid />
            <LiaFilterSolid />
            <FaCodeCompare />

            {/*  */}
            <div className="h-[30px] border "></div>
          </div>

          <div className="flex items-center flex-shrink-0 gap-3">
            <Select>
              <SelectTrigger className="md:Pw-[180px] w-[80px]">
                <SelectValue placeholder="Page size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="30">30</SelectItem>
              </SelectContent>
            </Select>
            {/* Manue Open */}
            <MobileNavbar/>
          </div>
        </div>
      </div>

      {/* items */}
      <div className="">
        <Table>
          <TableBody>
            {Members.map((member, idx) => (
              <MemberTableRow key={idx} member={member} />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminHomePage;
