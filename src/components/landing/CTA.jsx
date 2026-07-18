import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-32 px-6">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[180px]" />

        <div className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[120px]" />

      </div>

      <div className="relative max-w-6xl mx-auto">

        <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] backdrop-blur-2xl p-14 text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-violet-300">

            <Sparkles size={18} />

            Built for Everyday Payments

          </div>

          <h2 className="mt-8 text-5xl md:text-6xl font-black leading-tight text-white">

            Ready to Spend HBAR

            <br />

            Beyond Crypto?

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-400">

            HedraPay demonstrates how HBAR can power real-world
            everyday payments with a modern user experience,
            instant settlement, and enterprise-grade security.

          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Link
              to="/dashboard"
              className="group rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/30"
            >
              <span className="flex items-center gap-3">

                Launch Application

                <ArrowRight
                  size={20}
                  className="transition group-hover:translate-x-1"
                />

              </span>

            </Link>

            <a
              href="#services"
              className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-lg text-white transition hover:bg-white/10"
            >
              Explore Features
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}