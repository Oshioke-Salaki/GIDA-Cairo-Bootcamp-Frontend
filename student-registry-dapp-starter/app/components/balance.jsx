import { useAccount, useBalance } from "@starknet-react/core";
export default function Balance() {
  const { address } = useAccount();
  // TODO: - Fetch connected user's balance
  const { data, error } = useBalance({
    address,
    token: "0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d",
  });

  console.log(data);

  return (
    <div className="flex gap-x-3 items-center text-[#6F6F6F] text-base leading-6">
      <h3 className="">Wallet balance</h3>
      <div className="w-[1px] h-3 rounded bg-[#D9D9D9]"></div>
      <h4 className="font-semibold">
        {data ? parseFloat(data.formatted).toFixed(3) : 0} STRK
      </h4>
    </div>
  );
}
