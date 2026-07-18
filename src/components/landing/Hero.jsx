import { Link } from "react-router-dom";
import {
  ArrowRight,
  PlayCircle,
  Smartphone,
  Tv,
  Wifi,
  Zap,
  Coins,
  ShieldCheck,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">

      {/* Aurora */}

      <div className="absolute inset-0">

        <div className="absolute left-20 top-24 h-96 w-96 rounded-full bg-violet-700/25 blur-[140px] animate-pulse" />

        <div className="absolute right-10 top-40 h-80 w-80 rounded-full bg-blue-600/20 blur-[130px] animate-pulse" />

        <div className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-fuchsia-700/20 blur-[160px]" />

      </div>

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.25) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.25) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating Cards */}

      <FloatingCard
        className="left-20 top-44 animate-float"
        icon={<Smartphone size={20} />}
        title="Airtime"
        value="₦2,000"
      />

      <FloatingCard
        className="right-24 top-56 animate-float-fast"
        icon={<Zap size={20} />}
        title="Electricity"
        value="₦15,000"
      />

      <FloatingCard
        className="left-32 bottom-40 animate-float-slow"
        icon={<Wifi size={20} />}
        title="Internet"
        value="₦18,000"
      />

      <FloatingCard
        className="right-32 bottom-44 animate-float"
        icon={<Tv size={20} />}
        title="DStv"
        value="₦19,500"
      />

      {/* Main */}

      <div className="relative max-w-7xl mx-auto px-6 text-center">

        <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-5 py-2 text-violet-300">

          <ShieldCheck size={18} />

          Powered by Hedera

        </div>

        <h1 className="mt-10 text-7xl font-black leading-[1.02] tracking-tight text-white">

          The Future of

          <br />

          Everyday Payments

          <br />

          Starts on

          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">

            {" "}Hedera

          </span>

        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">

          Pay Airtime, Electricity, Internet,
          TV subscriptions and everyday services
          using HBAR in seconds with extremely low fees.

        </p>

        {/* Buttons */}

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <Link
            to="/dashboard"
            className="group rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-4 text-lg font-semibold text-white transition hover:scale-105"
          >
            <span className="flex items-center gap-3">

              Launch App

              <ArrowRight
                size={20}
                className="transition group-hover:translate-x-1"
              />

            </span>

          </Link>

          <button className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-lg text-white backdrop-blur-xl transition hover:bg-white/10">

            <span className="flex items-center gap-3">

              <PlayCircle size={20} />

              Watch Demo

            </span>

          </button>

        </div>

        {/* Stats */}

        <div className="mt-24 grid grid-cols-2 gap-6 md:grid-cols-4">

          <Stat number="250+" title="Demo Payments" />

          <Stat number="5+" title="Bill Types" />

          <Stat number="3 sec" title="Finality" />

          <Stat number="<$0.01" title="Network Fees" />

        </div>

      </div>

      {/* Giant Coin */}

      <div className="absolute right-16 top-1/2 hidden h-72 w-72 -translate-y-1/2 items-center justify-center rounded-full border border-violet-500/20 bg-white/5 backdrop-blur-3xl lg:flex">

        <Coins
          size={120}
          className="text-violet-400 opacity-80"
        />

      </div>

    </section>
  );
}

function FloatingCard({
  className,
  icon,
  title,
  value,
}) {
  return (
    <div
      className={`absolute hidden rounded-3xl border border-white/10 bg-white/5 p-5 text-white shadow-2xl backdrop-blur-xl lg:block ${className}`}
    >
      <div className="flex items-center gap-3">

        <div className="rounded-xl bg-violet-500/20 p-3">

          {icon}

        </div>

        <div>

          <p className="text-sm text-slate-400">

            {title}

          </p>

          <h3 className="font-bold">

            {value}

          </h3>

        </div>

      </div>

    </div>
  );
}

function Stat({
  number,
  title,
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

      <h2 className="text-4xl font-black text-white">

        {number}

      </h2>

      <p className="mt-2 text-slate-400">

        {title}

      </p>

    </div>
  );
}