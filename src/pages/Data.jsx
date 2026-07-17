import { useState } from "react";
import {
  Wifi,
  Phone,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import MainLayout from "../components/layout/MainLayout";

const bundles = [
  {
    id: 1,
    title: "1 GB",
    validity: "30 Days",
    amount: 500,
  },
  {
    id: 2,
    title: "2 GB",
    validity: "30 Days",
    amount: 1000,
  },
  {
    id: 3,
    title: "5 GB",
    validity: "30 Days",
    amount: 2000,
  },
  {
    id: 4,
    title: "10 GB",
    validity: "30 Days",
    amount: 5000,
  },
  {
    id: 5,
    title: "20 GB",
    validity: "30 Days",
    amount: 10000,
  },
  {
    id: 6,
    title: "50 GB",
    validity: "30 Days",
    amount: 20000,
  },
];

export default function Data() {
  const [provider, setProvider] = useState("MTN");
  const [phone, setPhone] = useState("");
  const [selectedBundle, setSelectedBundle] = useState(
    bundles[2]
  );

  const rate = 450;

  const hbar = (
    selectedBundle.amount / rate
  ).toFixed(2);

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center gap-2 text-slate-500 mb-8">
          Dashboard
          <ChevronRight size={16} />
          Buy Data
        </div>

        <div className="grid grid-cols-3 gap-8">

          {/* LEFT */}

          <div className="col-span-2">

            <div className="bg-white rounded-3xl p-8 shadow-sm">

              <div className="flex items-center gap-4 mb-8">

                <div className="h-16 w-16 rounded-2xl bg-blue-100 flex items-center justify-center">

                  <Wifi
                    className="text-blue-600"
                    size={30}
                  />

                </div>

                <div>

                  <h1 className="text-3xl font-bold">
                    Buy Data
                  </h1>

                  <p className="text-slate-500 mt-1">
                    Purchase internet bundles using HBAR.
                  </p>

                </div>

              </div>

              {/* Provider */}

              <div className="mb-6">

                <label className="block mb-2 font-medium">
                  Network
                </label>

                <select
                  value={provider}
                  onChange={(e) =>
                    setProvider(e.target.value)
                  }
                  className="w-full rounded-2xl border border-slate-300 p-4"
                >
                  <option>MTN</option>
                  <option>Airtel</option>
                  <option>Glo</option>
                  <option>9mobile</option>
                </select>

              </div>

              {/* Phone */}

              <div className="mb-8">

                <label className="block mb-2 font-medium">
                  Phone Number
                </label>

                <div className="relative">

                  <Phone
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    value={phone}
                    onChange={(e) =>
                      setPhone(e.target.value)
                    }
                    placeholder="08012345678"
                    className="w-full rounded-2xl border border-slate-300 py-4 pl-12 pr-4"
                  />

                </div>

              </div>

              <div>

                <label className="block mb-5 font-medium">
                  Select Bundle
                </label>

                <div className="grid grid-cols-2 gap-5">

                  {bundles.map((bundle) => (

                    <button
                      key={bundle.id}
                      onClick={() =>
                        setSelectedBundle(bundle)
                      }
                      className={`rounded-3xl border p-6 text-left transition ${
                        selectedBundle.id === bundle.id
                          ? "border-violet-600 bg-violet-50"
                          : "border-slate-200 hover:border-violet-300"
                      }`}
                    >

                      <h3 className="text-2xl font-bold">

                        {bundle.title}

                      </h3>

                      <p className="mt-2 text-slate-500">

                        {bundle.validity}

                      </p>

                      <p className="mt-6 text-lg font-semibold text-violet-600">

                        ₦{bundle.amount.toLocaleString()}

                      </p>

                    </button>

                  ))}

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <div className="sticky top-8 rounded-3xl bg-slate-900 p-8 text-white">

              <h2 className="text-2xl font-bold">

                Payment Summary

              </h2>

              <div className="mt-8 space-y-5">

                <Row
                  title="Network"
                  value={provider}
                />

                <Row
                  title="Phone"
                  value={phone || "--"}
                />

                <Row
                  title="Bundle"
                  value={selectedBundle.title}
                />

                <Row
                  title="Amount"
                  value={`₦${selectedBundle.amount.toLocaleString()}`}
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

                    {(Number(hbar)+0.05).toFixed(2)}
                    {" "}
                    HBAR

                  </span>

                </div>

              </div>

              <button className="mt-8 w-full rounded-2xl bg-violet-600 py-4 font-semibold flex justify-center items-center gap-2 hover:bg-violet-700">

                Continue

                <ArrowRight size={18} />

              </button>

            </div>

            <div className="mt-6 rounded-3xl border border-green-200 bg-green-50 p-6">

              <div className="flex items-center gap-3">

                <CheckCircle2 className="text-green-600" />

                <div>

                  <h3 className="font-semibold">
                    Instant Delivery
                  </h3>

                  <p className="text-sm text-slate-500">
                    Data bundles are delivered immediately after payment.
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