"use client";

import { felt252ToString } from "../lib/helpers";

export default function StudentTableRow({ student }) {
  if (!student) return null;

  return (
    <div className="items-center grid grid-cols-[1fr_1fr_1fr_1fr_1fr] py-6 px-4 text-[#6F6F6F] font-normal capitalize">
      <div>{student.id.toString()}</div>
      <div>{felt252ToString(student.lname)}</div>
      <div>{felt252ToString(student.fname)}</div>
      <div>{`0${student.phone_number.toString()}`}</div>
      <div>{student.age.toString()}</div>
    </div>
  );
}
