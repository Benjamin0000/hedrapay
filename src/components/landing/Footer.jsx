import { Link } from "react-router-dom";
import {
  GitBranch,
  Globe,
  Zap,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020617]">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid gap-14 md:grid-cols-4">

          {/* Brand */}

          <div className="md:col-span-2">

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl">

                <img src="/icon.png" />

              </div>

              <div>

                <h2 className="text-2xl font-black text-white">

                  HedraPay

                </h2>

                <p className="text-slate-500">

                  Powered by Hedera

                </p>

              </div>

            </div>

            <p className="mt-8 max-w-lg leading-8 text-slate-400">

              A modern payment experience that enables users to
              spend HBAR on everyday services including airtime,
              electricity, internet, TV subscriptions and more.

            </p>

          </div>

          {/* Links */}

          <div>

            <h3 className="font-bold text-white">

              Product

            </h3>

            <div className="mt-6 space-y-4">

              <a href="#services" className="block text-slate-400 hover:text-white">
                Services
              </a>

              <a href="#how-it-works" className="block text-slate-400 hover:text-white">
                How it Works
              </a>

              <a href="#why-hedera" className="block text-slate-400 hover:text-white">
                Why Hedera
              </a>

            </div>

          </div>

          {/* App */}

          <div>

            <h3 className="font-bold text-white">

              Launch

            </h3>

            <div className="mt-6 space-y-4">

              <Link
                to="/dashboard"
                className="flex items-center gap-2 text-slate-400 hover:text-white"
              >
                Open Application

                <ArrowUpRight size={16} />

              </Link>

              <div className="flex items-center gap-3 text-slate-400">

                <GitBranch size={18} />

                GitHub

              </div>

              <div className="flex items-center gap-3 text-slate-400">

                <Globe size={18} />

                Hedera Network

              </div>

            </div>

          </div>

        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">

          <p>

            © {new Date().getFullYear()} HedraPay. All rights reserved.

          </p>

          <p>

            Built as a native Hedera application.

          </p>

        </div>

      </div>

    </footer>
  );
}