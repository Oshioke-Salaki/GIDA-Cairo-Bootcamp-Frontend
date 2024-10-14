"use client";
import starknetLogo from "../assets/starknet-logo.svg";
import Connector from "./connector";

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-[22px]">
        <img src={starknetLogo.src} alt="logo" />
      </div>
      <Connector />
    </div>
  );
}
