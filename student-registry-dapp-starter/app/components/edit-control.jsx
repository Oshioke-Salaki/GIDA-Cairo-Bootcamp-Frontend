import { useRef, useState } from "react";
import EditIcon from "../svg/EditIcon";
import CloseIcon from "../svg/CloseIcon";

export default function EditControl({ student }) {
  const editStudentPopover = useRef(null);

  // Form State Values
  const [surname, setSurname] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");

  // Submit Event Handler
  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  // TODO: Implement edit student functionality

  // Loading State
  // const LoadingState = ({ message }) => (
  //   <div className="flex items-center space-x-2">
  //     <HashLoader size={16} color="#ffffff" />
  //     <span>{message}</span>
  //   </div>
  // );
  // const buttonContent = () => {
  //   if (writeIsPending) {
  //     return <LoadingState message="Sending" />;
  //   }

  //   if (waitIsLoading) {
  //     return <LoadingState message="Waiting for confirmation" />;
  //   }

  //   if (waitData && waitData.status === "REJECTED") {
  //     return <LoadingState message="Transaction rejected" />;
  //   }

  //   if (waitData) {
  //     return "Transaction confirmed";
  //   }

  //   return "Edit Student";
  // };

  return (
    <>
      <button
        className="text-[#5B9EF7]"
        onClick={() => editStudentPopover.current?.showModal()}
      >
        <EditIcon />
      </button>

      <dialog
        ref={editStudentPopover}
        className="overflow-hidden rounded-[12px] bg-white lg:rounded-[24px]"
      >
        <form className="py-6 transition-all duration-500 ease-linear px-[26px] bg-white flex flex-col gap-y-6 border-[#F2F2F2] border-solid border-[1px] w-[557px] h-fit rounded-lg shadow-md text-sm leading-5">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Edit Student</h2>
            <button
              className=""
              onClick={() => editStudentPopover.current?.close()}
            >
              <CloseIcon />
            </button>
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="surname" className="text-[#6F6F6F]">
              Surname
            </label>
            <input
              type="text"
              id="surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              placeholder="Enter the student's surname"
              className="border-[1px] border-[#B7B7B7] rounded-2xl py-3 px-4"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="firstName" className="text-[#6F6F6F]">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter the student's first name"
              className="border-[1px] border-[#B7B7B7] rounded-2xl py-3 px-4"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="phoneNumber" className="text-[#6F6F6F]">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="border-[1px] border-[#B7B7B7] rounded-2xl py-3 px-4"
              placeholder="Enter the student's phone number"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="age" className="text-[#6F6F6F]">
              Age
            </label>
            <input
              type="text"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="border-[1px] border-[#B7B7B7] rounded-2xl py-3 px-4"
              placeholder="Enter the student's age"
            />
          </div>
          <button
            className="w-full py-3 bg-[#5B9EF7] rounded-2xl text-base flex justify-center items-center leading-6 font-medium text-[#F9F9F9] mt-2 disabled:cursor-not-allowed disabled:bg-opacity-85"
            disabled={!surname || !firstName || !age || !phoneNumber}
            onClick={handleSubmit}
          >
            {/* {buttonContent()} */}
            Edit Student
          </button>
        </form>
      </dialog>
    </>
  );
}
