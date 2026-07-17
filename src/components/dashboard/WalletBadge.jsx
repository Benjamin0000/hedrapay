import { ChevronDown, Copy, LogOut, Wallet } from "lucide-react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export default function WalletBadge() {
  const accountId = "0.0.10492839";

  const shortAccount =
    accountId.substring(0, 8) +
    "..." +
    accountId.substring(accountId.length - 3);

  return (
    <Menu as="div" className="relative" style={{zIndex: 1000}}>
      <MenuButton className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-2 hover:shadow-md transition">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100">
          <Wallet className="text-violet-600" size={20} />
        </div>

        <div className="text-left">
          <p className="text-xs text-slate-500">
            Connected Wallet
          </p>

          <h3 className="font-semibold">
            {shortAccount}
          </h3>

          <p className="text-xs text-green-600">
            ● HashPack Connected
          </p>
        </div>

        <ChevronDown
          size={18}
          className="text-slate-500"
        />
      </MenuButton>

      <MenuItems className="absolute right-0 mt-3 w-72 rounded-2xl border border-slate-200 bg-white shadow-xl p-2">

        <div className="border-b pb-4 px-3">
          <p className="text-sm text-slate-500">
            Wallet
          </p>

          <p className="font-semibold mt-1">
            {accountId}
          </p>

          <p className="text-xs text-green-600 mt-1">
            Connected with HashPack
          </p>
        </div>

        <MenuItem>
          <button className="flex w-full items-center gap-3 rounded-xl p-3 hover:bg-slate-100 mt-2">
            <Copy size={18} />

            Copy Account ID
          </button>
        </MenuItem>

        <MenuItem>
          <button className="flex w-full items-center gap-3 rounded-xl p-3 hover:bg-slate-100">
            <Wallet size={18} />

            View on HashScan
          </button>
        </MenuItem>

        <MenuItem>
          <button className="flex w-full items-center gap-3 rounded-xl p-3 text-red-500 hover:bg-red-50">
            <LogOut size={18} />

            Disconnect Wallet
          </button>
        </MenuItem>

      </MenuItems>
    </Menu>
  );
}