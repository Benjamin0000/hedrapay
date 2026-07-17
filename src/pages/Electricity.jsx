import { useState } from "react";
import {
  Zap,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Search,
  BadgeCheck,
} from "lucide-react";

import MainLayout from "../components/layout/MainLayout";

export default function Electricity() {
  const [provider, setProvider] = useState("AEDC");
  const [meterType, setMeterType] = useState("Prepaid");
  const [meterNumber, setMeterNumber] = useState("");
  const [amount, setAmount] = useState("");

  const [customer, setCustomer] = useState(null);

  const rate = 450;

  const hbar =
    amount && !isNaN(amount)
      ? (Number(amount) / rate).toFixed(2)
      : "0.00";

  const verifyMeter = () => {
    if (!meterNumber) return;

    setCustomer({
      name: "Benjamin O.",
      address: "Life Camp, Abuja",
    });
  };

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto">

        {/* Breadcrumb */}

        <div className="flex items-center gap-2 text-slate-500 mb-8">

          Dashboard

          <ChevronRight size={16} />

          Electricity

        </div>

        <div className="grid grid-cols-3 gap-8">

          {/* LEFT */}

          <div className="col-span-2">

            <div className="bg-white rounded-3xl shadow-sm p-8">

              <div className="flex items-center gap-4 mb-8">

                <div className="h-16 w-16 rounded-2xl bg-yellow-100 flex items-center justify-center">

                  <Zap
                    className="text-yellow-600"
                    size={30}
                  />

                </div>

                <div>

                  <h1 className="text-3xl font-bold">

                    Electricity Bill

                  </h1>

                  <p className="text-slate-500 mt-1">

                    Pay electricity bills using HBAR.

                  </p>

                </div>

              </div>

              {/* Provider */}

              <div className="mb-6">

                <label className="block mb-2 font-medium">

                  Distribution Company

                </label>

                <select
                  value={provider}
                  onChange={(e) =>
                    setProvider(e.target.value)
                  }
                  className="w-full rounded-2xl border border-slate-300 p-4"
                >
                  <option>AEDC</option>
                  <option>IKEDC</option>
                  <option>EKEDC</option>
                  <option>IBEDC</option>
                  <option>PHED</option>
                </select>

              </div>

              {/* Meter Type */}

              <div className="mb-6">

                <label className="block mb-3 font-medium">

                  Meter Type

                </label>

                <div className="flex gap-4">

                  <button
                    onClick={() =>
                      setMeterType("Prepaid")
                    }
                    className={`flex-1 rounded-2xl p-4 border transition ${
                      meterType === "Prepaid"
                        ? "bg-violet-600 text-white border-violet-600"
                        : "border-slate-300"
                    }`}
                  >
                    Prepaid
                  </button>

                  <button
                    onClick={() =>
                      setMeterType("Postpaid")
                    }
                    className={`flex-1 rounded-2xl p-4 border transition ${
                      meterType === "Postpaid"
                        ? "bg-violet-600 text-white border-violet-600"
                        : "border-slate-300"
                    }`}
                  >
                    Postpaid
                  </button>

                </div>

              </div>

              {/* Meter */}

              <div className="mb-6">

                <label className="block mb-2 font-medium">

                  Meter Number

                </label>

                <div className="flex gap-3">

                  <input
                    value={meterNumber}
                    onChange={(e) =>
                      setMeterNumber(e.target.value)
                    }
                    placeholder="Enter Meter Number"
                    className="flex-1 rounded-2xl border border-slate-300 p-4"
                  />

                  <button
                    onClick={verifyMeter}
                    className="rounded-2xl bg-slate-900 text-white px-6 flex items-center gap-2"
                  >
                    <Search size={18} />

                    Verify
                  </button>

                </div>

              </div>

              {/* Customer */}

              {customer && (

                <div className="mb-6 rounded-2xl bg-green-50 border border-green-200 p-5">

                  <div className="flex items-center gap-3">

                    <BadgeCheck className="text-green-600" />

                    <div>

                      <p className="font-semibold">

                        {customer.name}

                      </p>

                      <p className="text-sm text-slate-500">

                        {customer.address}

                      </p>

                    </div>

                  </div>

                </div>

              )}

              {/* Amount */}

              <div>

                <label className="block mb-2 font-medium">

                  Amount (₦)

                </label>

                <input
                  type="number"
                  placeholder="10000"
                  value={amount}
                  onChange={(e) =>
                    setAmount(e.target.value)
                  }
                  className="w-full rounded-2xl border border-slate-300 p-4"
                />

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <div className="bg-slate-900 rounded-3xl p-8 text-white sticky top-8">

              <h2 className="text-2xl font-bold">

                Payment Summary

              </h2>

              <div className="space-y-5 mt-8">

                <Row
                  title="Provider"
                  value={provider}
                />

                <Row
                  title="Meter Type"
                  value={meterType}
                />

                <Row
                  title="Meter Number"
                  value={meterNumber || "--"}
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
                  title="HBAR"
                  value={`${hbar} HBAR`}
                />

                <Row
                  title="Network Fee"
                  value="0.05 HBAR"
                />

                <hr className="border-slate-700"/>

                <div className="flex justify-between text-xl font-bold">

                  <span>Total</span>

                  <span>

                    {(Number(hbar)+0.05).toFixed(2)} HBAR

                  </span>

                </div>

              </div>

              <button className="mt-8 w-full rounded-2xl bg-violet-600 py-4 flex justify-center items-center gap-2 font-semibold hover:bg-violet-700">

                Continue

                <ArrowRight size={18}/>

              </button>

            </div>

            <div className="mt-6 rounded-3xl bg-green-50 border border-green-200 p-6">

              <div className="flex items-center gap-3">

                <CheckCircle2 className="text-green-600"/>

                <div>

                  <h3 className="font-semibold">

                    Secure Hedera Settlement

                  </h3>

                  <p className="text-sm text-slate-500">

                    Transactions settle on Hedera with low fees.

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
      <span className="text-slate-400">{title}</span>
      <span>{value}</span>
    </div>
  );
}