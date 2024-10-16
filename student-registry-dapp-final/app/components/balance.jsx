import { useBalance } from "@starknet-react/core";

export default function Balance({ balance }) {
  return (
    <>
      <div className="flex gap-x-3 items-center text-[#6F6F6F] text-base leading-6">
        <h3 className="">Wallet balance</h3>
        <div className="w-[1px] h-3 rounded bg-[#D9D9D9]"></div>
        <h4 className="font-semibold">{parseFloat(balance).toFixed(4)} STRK</h4>
      </div>
    </>
  );
}
