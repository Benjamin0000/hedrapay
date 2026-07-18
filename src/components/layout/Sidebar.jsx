import {
  LayoutDashboard,
  Smartphone,
  Wifi,
  Zap,
  Tv,
  Globe,
  ReceiptText,
  Gift,
  Settings,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const menu = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    title: "Airtime",
    icon: Smartphone,
    path: "/airtime",
  },
  {
    title: "Data",
    icon: Wifi,
    path: "/data",
  },
  {
    title: "Electricity",
    icon: Zap,
    path: "/electricity",
  },
  {
    title: "TV Subscription",
    icon: Tv,
    path: "/tv",
  },
  {
    title: "Internet",
    icon: Globe,
    path: "/internet",
  },
  {
    title: "Transactions",
    icon: ReceiptText,
    path: "/transactions",
  },
  {
    title: "Rewards",
    icon: Gift,
    path: "/rewards",
  },
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-slate-950 min-h-screen flex flex-col">
      <div className="px-8 py-8 border-b border-slate-800">
        <div className="text-3xl font-bold text-white">
         <span style={{display:'inline-block', marginBottom:'-5px'}}> <img width={30} src="/icon.png"/> </span> 
         <span style={{display:'inline-block'}}> HedraPay</span>
        </div>

        <p className="text-slate-400 mt-2">
          Spend HBAR Anywhere
        </p>
      </div>

      <div className="flex-1 py-6">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                `mx-4 flex items-center gap-4 rounded-xl px-5 py-4 transition
                ${
                  isActive
                    ? "bg-violet-600 text-white"
                    : "text-slate-300 hover:bg-slate-800"
                }`
              }
            >
              <Icon size={20} />

              {item.title}
            </NavLink>
          );
        })}
      </div>

      <div className="border-t border-slate-800 p-6">
        <div className="rounded-xl bg-slate-900 p-4">
          <p className="text-sm text-slate-400">
            Connected Wallet
          </p>

          <p className="mt-2 text-white font-semibold">
            HashPack
          </p>

          <p className="text-xs text-slate-500 mt-1">
            Hedera Mainnet
          </p>
            <p className="mt-3 text-xs text-slate-500">
            Network Status
            </p>

            <div className="mt-2 flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>

            <span className="text-sm text-green-400">
                Online
            </span>
            </div>
          
        </div>
      </div>
    </aside>
  );
}