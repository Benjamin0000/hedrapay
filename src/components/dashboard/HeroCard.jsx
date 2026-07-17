import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .45 }}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-700 via-indigo-700 to-blue-700 p-10 text-white"
    >
      {/* Background circles */}

      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

      <div className="absolute bottom-0 left-0 h-60 w-60 rounded-full bg-violet-400/20 blur-3xl"></div>

      <div className="relative z-10 flex justify-between">

        <div>

          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
            <Sparkles size={16} />

            Spend HBAR Anywhere
          </div>

          <h1 className="mt-6 text-5xl font-bold leading-tight">
            Pay real-world
            <br />
            bills using HBAR
          </h1>

          <p className="mt-5 max-w-xl text-lg text-violet-100">
            Purchase airtime, electricity,
            internet, TV subscriptions,
            gaming vouchers and more using
            your Hedera wallet.
          </p>

          <button className="mt-8 flex items-center gap-3 rounded-2xl bg-white px-6 py-4 font-semibold text-slate-900 hover:scale-105 transition">
            Pay Bills

            <ArrowRight size={18} />
          </button>

        </div>

        <div className="hidden xl:flex flex-col justify-center">

          <div className="rounded-3xl bg-white/10 backdrop-blur-xl p-8">

            <p className="text-violet-100">
              Available Balance
            </p>

            <h2 className="mt-3 text-5xl font-bold">
              2,350
            </h2>

            <div className="mt-3 flex items-center gap-3">
              <span className="rounded-full bg-green-400/20 px-3 py-1 text-sm text-green-200">
                ▲ +4.8%
              </span>

              <span className="text-violet-100">
                Updated just now
              </span>
            </div>

            <div className="mt-8 border-t border-white/20 pt-6">

              <p className="text-violet-200">
                ≈ ₦1,292,500
              </p>

            </div>

          </div>

        </div>

      </div>

    </motion.div>
  );
}