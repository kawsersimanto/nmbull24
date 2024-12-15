"use client";

import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { Member } from "@/types/Member";
import Image from "next/image";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa6";
import { LiaTrashAltSolid } from "react-icons/lia";
import { MdOutlineDone } from "react-icons/md";
import ViewMemberDialog from "../Dialogs/ViewMemberDialog";
import DeleteMemberDialog from "../Dialogs/DeleteMemberDialog";

interface props {
  member: Member;
}

const MemberTableRow = ({ member }: props) => {

  const [isViewOpen, setIsViewOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const handleDelete = () => {
    // onDelete(member.name); // Call the delete callback
    setIsDeleteOpen(false);
  };
  return (
    <>
      <TableRow key={member.name} className="">
        <TableCell>
          <div className="flex flex-shrink-0 items-center gap-2 ">
            {/* <Image
            src={member.image || ""}
            fill
            alt="Image"
            className="size-[50px] rounded-full"
          /> */}
            <div className="">
              <p className="text-lg">{member.name}</p>
              <p>Countrt: {member.country}</p>
              <div className="flex items-center gap-2 text-sm">
                <p>Age: {member.age}</p>
                <p>{member.capital}</p>
              </div>
            </div>
          </div>
        </TableCell>

        <TableCell>
          <p>
            Membership: <span className="text-xs">{member.membership}</span>
          </p>
          <p className="">
            Acooumendation: <span className="text-xs">standard</span>
          </p>
        </TableCell>

        <TableCell>
          <p>Exodus summit member?</p>
          <p className="">{member.summit_member}</p>
        </TableCell>
        <TableCell className="flex gap-2 items-center">
          <Button
            variant={"outline"}
            className="bg-[rgba(0,229,8,0.32)]"
            onClick={() => alert("edit")}
          >
            <MdOutlineDone className="text-xl" />
          </Button>
          <Button variant={"outline"} onClick={() => setIsViewOpen(true)}>
            <FaEye className="text-xl" />
          </Button>
          <Button variant={"outline"} className="">
            <LiaTrashAltSolid className="text-xl text-red-400" />
          </Button>
        </TableCell>
      </TableRow>
      {/* View Member Dialog */}
      <ViewMemberDialog
        isOpen={isViewOpen}
        onClose={() => setIsViewOpen(false)}
        member={member}
      />

      {/* Delete Member Dialog */}
      <DeleteMemberDialog
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        // onDelete={handleDelete}
        memberName={member.name}
      />
    </>
  );
};

export default MemberTableRow;
