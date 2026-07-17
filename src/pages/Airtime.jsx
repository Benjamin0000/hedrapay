import { useState } from "react";
import {
  Smartphone,
  Phone,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import MainLayout from "../components/layout/MainLayout";

export default function Airtime() {
  const [provider, setProvider] = useState("MTN");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");

  const rate = 450;

  const hbar =
    amount && !isNaN(amount)
      ? (Number(amount) / rate).toFixed(2)
      : "0.00";

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto">

        {/* Breadcrumb */}

        <div className="flex items-center gap-2 text-slate-500 mb-8">

          Dashboard

          <ChevronRight size={16} />

          Airtime

        </div>

        <div className="grid grid-cols-3 gap-8">

          {/* LEFT */}

          <div className="col-span-2">

            <div className="bg-white rounded-3xl shadow-sm p-8">

              <div className="flex items-center gap-4 mb-8">

                <div className="h-16 w-16 rounded-2xl bg-violet-100 flex items-center justify-center">

                  <Smartphone
                    className="text-violet-600"
                    size={30}
                  />

                </div>

                <div>

                  <h1 className="text-3xl font-bold">

                    Buy Airtime

                  </h1>

                  <p className="text-slate-500 mt-1">

                    Recharge any mobile number using HBAR.

                  </p>

                </div>

              </div>

              {/* Provider */}

              <div className="mb-6">

                <label className="block mb-2 font-medium">

                  Mobile Network

                </label>

                <select
                  value={provider}
                  onChange={(e) =>
                    setProvider(e.target.value)
                  }
                  className="w-full rounded-2xl border border-slate-300 p-4 focus:outline-none focus:border-violet-600"
                >
                  <option>MTN</option>
                  <option>Airtel</option>
                  <option>Glo</option>
                  <option>9mobile</option>
                </select>

              </div>

              {/* Phone */}

              <div className="mb-6">

                <label className="block mb-2 font-medium">

                  Phone Number

                </label>

                <div className="relative">

                  <Phone
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    placeholder="08012345678"
                    value={phone}
                    onChange={(e) =>
                      setPhone(e.target.value)
                    }
                    className="w-full rounded-2xl border border-slate-300 py-4 pl-12 pr-4 focus:outline-none focus:border-violet-600"
                  />

                </div>

              </div>

              {/* Amount */}

              <div>

                <label className="block mb-2 font-medium">

                  Amount (₦)

                </label>

                <input
                  type="number"
                  placeholder="2000"
                  value={amount}
                  onChange={(e) =>
                    setAmount(e.target.value)
                  }
                  className="w-full rounded-2xl border border-slate-300 p-4 focus:outline-none focus:border-violet-600"
                />

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <div className="bg-slate-900 rounded-3xl text-white p-8 sticky top-8">

              <h2 className="text-2xl font-bold">

                Payment Summary

              </h2>

              <div className="mt-8 space-y-5">

                <Row
                  title="Provider"
                  value={provider}
                />

                <Row
                  title="Recipient"
                  value={phone || "--"}
                />

                <Row
                  title="Amount"
                  value={
                    amount
                      ? `₦${Number(amount).toLocaleString()}`
                      : "--"
                  }
                />

                <Row
                  title="Exchange Rate"
                  value="1 HBAR = ₦450"
                />

                <Row
                  title="HBAR Required"
                  value={`${hbar} HBAR`}
                />

                <Row
                  title="Network Fee"
                  value="0.05 HBAR"
                />

                <hr className="border-slate-700" />

                <div className="flex justify-between text-xl font-bold">

                  <span>Total</span>

                  <span>

                    {(Number(hbar) + 0.05).toFixed(2)}
                    {" "}
                    HBAR

                  </span>

                </div>

              </div>

              <button
                className="mt-8 w-full rounded-2xl bg-violet-600 py-4 font-semibold flex justify-center items-center gap-2 hover:bg-violet-700 transition"
              >

                Continue

                <ArrowRight size={18} />

              </button>

            </div>

            <div className="mt-6 rounded-3xl bg-green-50 border border-green-200 p-6">

              <div className="flex items-center gap-3">

                <CheckCircle2 className="text-green-600" />

                <div>

                  <h3 className="font-semibold">

                    Powered by Hedera

                  </h3>

                  <p className="text-sm text-slate-500">

                    Fast, secure and low-cost
                    transactions on Hedera.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </MainLayout>
  );
}

function Row({ title, value }) {
  return (
    <div className="flex justify-between">
      <span className="text-slate-400">
        {title}
      </span>

      <span>{value}</span>
    </div>
  );
}