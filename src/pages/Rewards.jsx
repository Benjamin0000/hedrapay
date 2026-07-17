import {
  Gift,
  Trophy,
  Coins,
  Users,
  TrendingUp,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

import MainLayout from "../components/layout/MainLayout";

const history = [
  {
    title: "Airtime Cashback",
    amount: "+0.45 HBAR",
    date: "Today",
  },
  {
    title: "Electricity Reward",
    amount: "+2.10 HBAR",
    date: "Yesterday",
  },
  {
    title: "Referral Bonus",
    amount: "+15 HBAR",
    date: "2 days ago",
  },
  {
    title: "TV Subscription Cashback",
    amount: "+1.05 HBAR",
    date: "5 days ago",
  },
];

export default function Rewards() {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="rounded-3xl bg-gradient-to-r from-violet-700 via-indigo-700 to-blue-700 p-10 text-white overflow-hidden relative">

          <div className="absolute -right-16 -top-16 h-60 w-60 rounded-full bg-white/10 blur-3xl"></div>

          <div className="relative">

            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">

              <Sparkles size={16} />

              Hedera Loyalty Program

            </div>

            <h1 className="mt-6 text-5xl font-bold">

              Earn HBAR

              <br />

              every time you pay.

            </h1>

            <p className="mt-5 max-w-xl text-violet-100">

              Receive cashback, unlock achievements and
              earn additional HBAR simply by using HedraPay.

            </p>

          </div>

        </div>

        {/* Stats */}

        <div className="grid grid-cols-4 gap-6 mt-8">

          <Card
            icon={<Coins />}
            title="Available"
            value="58.42 HBAR"
            color="bg-violet-100 text-violet-600"
          />

          <Card
            icon={<TrendingUp />}
            title="Lifetime Earned"
            value="243 HBAR"
            color="bg-green-100 text-green-600"
          />

          <Card
            icon={<Users />}
            title="Referral Rewards"
            value="95 HBAR"
            color="bg-blue-100 text-blue-600"
          />

          <Card
            icon={<Gift />}
            title="Cashback Rate"
            value="2%"
            color="bg-orange-100 text-orange-600"
          />

        </div>

        {/* Main */}

        <div className="grid grid-cols-3 gap-8 mt-10">

          {/* Left */}

          <div className="col-span-2 space-y-8">

            {/* Progress */}

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <div className="flex justify-between items-center">

                <div>

                  <h2 className="text-2xl font-bold">

                    Rewards Tier

                  </h2>

                  <p className="text-slate-500 mt-1">

                    Gold Member

                  </p>

                </div>

                <Trophy
                  className="text-yellow-500"
                  size={40}
                />

              </div>

              <div className="mt-8">

                <div className="flex justify-between text-sm mb-2">

                  <span>Gold</span>

                  <span>350 / 500 HBAR</span>

                </div>

                <div className="h-4 rounded-full bg-slate-200">

                  <div
                    className="h-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500"
                    style={{ width: "70%" }}
                  />

                </div>

                <p className="mt-4 text-slate-500">

                  Earn <strong>150 HBAR</strong> more
                  to unlock the Platinum tier.

                </p>

              </div>

            </div>

            {/* History */}

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <h2 className="text-2xl font-bold mb-6">

                Reward Activity

              </h2>

              <div className="space-y-4">

                {history.map((item) => (

                  <div
                    key={item.title}
                    className="flex justify-between items-center rounded-2xl border p-5 hover:bg-slate-50 transition"
                  >

                    <div className="flex items-center gap-4">

                      <div className="h-12 w-12 rounded-xl bg-green-100 flex items-center justify-center">

                        <CheckCircle2 className="text-green-600"/>

                      </div>

                      <div>

                        <h3 className="font-semibold">

                          {item.title}

                        </h3>

                        <p className="text-sm text-slate-500">

                          {item.date}

                        </p>

                      </div>

                    </div>

                    <h3 className="font-bold text-green-600">

                      {item.amount}

                    </h3>

                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="space-y-8">

            {/* Withdraw */}

            <div className="rounded-3xl bg-slate-900 p-8 text-white">

              <h2 className="text-2xl font-bold">

                Claim Rewards

              </h2>

              <p className="mt-3 text-slate-300">

                Withdraw your earned HBAR
                directly into your connected wallet.

              </p>

              <div className="mt-8 rounded-2xl bg-slate-800 p-5">

                <p className="text-slate-400">

                  Available Balance

                </p>

                <h2 className="mt-2 text-4xl font-bold">

                  58.42 HBAR

                </h2>

              </div>

              <button className="mt-8 w-full rounded-2xl bg-violet-600 py-4 font-semibold flex justify-center items-center gap-2 hover:bg-violet-700">

                Claim Rewards

                <ArrowUpRight size={18}/>

              </button>

            </div>

            {/* Achievement */}

            <div className="rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-500 p-8 text-white">

              <Trophy size={45} />

              <h2 className="mt-5 text-2xl font-bold">

                Achievement Unlocked

              </h2>

              <p className="mt-3">

                Paid your first
                10 utility bills using HBAR.

              </p>

            </div>

          </div>

        </div>

      </div>
    </MainLayout>
  );
}

function Card({
  icon,
  title,
  value,
  color,
}) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">

      <div
        className={`h-14 w-14 rounded-2xl flex items-center justify-center ${color}`}
      >
        {icon}
      </div>

      <p className="mt-5 text-slate-500">
        {title}
      </p>

      <h2 className="mt-2 text-3xl font-bold">
        {value}
      </h2>

    </div>
  );
}