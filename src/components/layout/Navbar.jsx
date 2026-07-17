import { Bell, Search, ChevronDown } from "lucide-react";
import WalletBadge from "../dashboard/WalletBadge";
import CountrySelector from "../dashboard/CountrySelector";

export default function Navbar() {
  return (
    <header className="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between">
      {/* Search */}
      <div className="relative w-[420px]">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          placeholder="Search services..."
          className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 outline-none focus:border-violet-500 focus:bg-white"
        />
      </div>

      <div className="flex items-center gap-5">
        <CountrySelector />

        <button className="relative rounded-xl border border-slate-200 p-3 hover:bg-slate-100 transition">
          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        <WalletBadge />
      </div>
    </header>
  );
}