import AdminSidebar from "@/components/admin/Sidebar/Sidebar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MdOutlineDone } from "react-icons/md";

import React from "react";
import { FaCodeCompare, FaEye } from "react-icons/fa6";
import {
  LiaFilterSolid,
  LiaSearchSolid,
  LiaTrashAltSolid,
} from "react-icons/lia";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Members } from "@/constants/members";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import MemberTableRow from "@/components/admin/Sidebar/MemberTableRow";

const AdminHomePage = () => {
  return (
    <div className="bg-slate-100 p-4 rounded-lg">
      {/* page header */}
      <div className="flex justify-between items-center flex-shrink-0 ">
        <h4 className="text-2xl">Membership</h4>
        <div className="flex gap-2 items-center ">
          <LiaSearchSolid />
          <LiaFilterSolid />
          <FaCodeCompare />

          {/*  */}
          <div className="h-[30px] border "></div>

          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Page size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="30">30</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* items */}

      <div className="">
        <Table>
          <TableBody>
            {Members.map((member) => (
              <MemberTableRow member={member}/>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminHomePage;
