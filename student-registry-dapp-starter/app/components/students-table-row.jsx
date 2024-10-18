"use client";
import { felt252ToString } from "../lib/helpers";
import TrashIcon from "../svg/TrashIcon";
import EditControl from "./edit-control";

export default function StudentTableRow({ student }) {
  if (!student) return null;
  //TODO: Implement delete student Functionality

  return (
    <div className="items-center grid grid-cols-[2fr_2fr_2fr_2fr_90px_1fr] py-6 px-4 text-[#6F6F6F] font-normal capitalize">
      <div>{student.id.toString()}</div>
      <div>{felt252ToString(student.lname)}</div>
      <div>{felt252ToString(student.fname)}</div>
      <div>{`0${student.phone_number.toString()}`}</div>
      <div>{student.age.toString()}</div>
      <div className="flex gap-x-4 justify-center items-center">
        <EditControl student={student} />
        <button className="text-[#7A0012]">
          <TrashIcon />
        </button>
      </div>
    </div>
  );
}
