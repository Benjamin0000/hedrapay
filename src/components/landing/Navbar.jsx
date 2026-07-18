import { Link } from "react-router-dom";
import {
  ArrowRight,
  Menu,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Services", href: "#services" },
    { label: "How it Works", href: "#how-it-works" },
    { label: "Why Hedera", href: "#why-hedera" },
  ];

  return (
    <>
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">

        <div className="rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,.45)]">

          <div className="flex h-20 items-center justify-between px-7">

            {/* Logo */}

            <Link
              to="/"
              className="flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl ">

                {/* <Zap
                  className="text-white"
                  size={22}
                /> */}

                <img src="/icon.png" />

              </div>

              <div>

                <h1 className="font-black text-xl text-white">
                  HedraPay
                </h1>

                <p className="text-xs text-slate-400">
                  Powered by Hedera
                </p>

              </div>

            </Link>

            {/* Desktop Menu */}

            <nav className="hidden lg:flex items-center gap-10">

              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-slate-300 transition hover:text-white"
                >
                  {item.label}
                </a>
              ))}

            </nav>

            {/* Right */}

            <div className="hidden lg:flex items-center gap-4">

              <Link
                to="/dashboard"
                className="group rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 font-semibold text-white transition hover:scale-105 hover:shadow-xl hover:shadow-violet-500/30 flex items-center gap-2"
              >
                Launch App

                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />

              </Link>

            </div>

            {/* Mobile */}

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-white"
            >
              {open ? <X /> : <Menu />}
            </button>

          </div>

        </div>

      </header>

      {/* Mobile Drawer */}

      {open && (
        <div className="fixed inset-x-4 top-28 z-40 rounded-3xl border border-white/10 bg-slate-900/95 backdrop-blur-xl p-6 lg:hidden">

          <div className="space-y-5">

            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block text-lg text-slate-200 hover:text-violet-400"
              >
                {item.label}
              </a>
            ))}

            <Link
              to="/dashboard"
              className="mt-5 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 py-4 font-semibold text-white"
            >
              Launch App

              <ArrowRight size={18} />

            </Link>

          </div>

        </div>
      )}
    </>
  );
}