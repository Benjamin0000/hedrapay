import { useState } from "react";
import {
  Tv,
  Search,
  BadgeCheck,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import MainLayout from "../components/layout/MainLayout";

const packages = [
  {
    id: 1,
    name: "DStv Compact",
    price: 19500,
    channels: "175+ Channels",
  },
  {
    id: 2,
    name: "DStv Compact Plus",
    price: 30000,
    channels: "190+ Channels",
  },
  {
    id: 3,
    name: "DStv Premium",
    price: 44000,
    channels: "220+ Channels",
  },
];

export default function TvSubscription() {
  const [provider, setProvider] = useState("DStv");
  const [smartCard, setSmartCard] = useState("");
  const [customer, setCustomer] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(packages[0]);

  const rate = 450;

  const hbar = (
    selectedPackage.price / rate
  ).toFixed(2);

  const verify = () => {
    if (!smartCard) return;

    setCustomer({
      name: "Benjamin O.",
      bouquet: "Compact",
      expiry: "28 July 2026",
    });
  };

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center gap-2 text-slate-500 mb-8">
          Dashboard
          <ChevronRight size={16} />
          TV Subscription
        </div>

        <div className="grid grid-cols-3 gap-8">

          {/* LEFT */}

          <div className="col-span-2">

            <div className="bg-white rounded-3xl shadow-sm p-8">

              <div className="flex items-center gap-4 mb-8">

                <div className="h-16 w-16 rounded-2xl bg-red-100 flex items-center justify-center">
                  <Tv className="text-red-600" size={30} />
                </div>

                <div>

                  <h1 className="text-3xl font-bold">
                    TV Subscription
                  </h1>

                  <p className="text-slate-500 mt-1">
                    Renew your TV subscription with HBAR.
                  </p>

                </div>

              </div>

              {/* Provider */}

              <div className="mb-6">

                <label className="block mb-2 font-medium">
                  Provider
                </label>

                <select
                  value={provider}
                  onChange={(e) =>
                    setProvider(e.target.value)
                  }
                  className="w-full rounded-2xl border border-slate-300 p-4"
                >
                  <option>DStv</option>
                  <option>GOtv</option>
                  <option>StarTimes</option>
                </select>

              </div>

              {/* Smart Card */}

              <div className="mb-6">

                <label className="block mb-2 font-medium">
                  Smart Card Number
                </label>

                <div className="flex gap-3">

                  <input
                    value={smartCard}
                    onChange={(e) =>
                      setSmartCard(e.target.value)
                    }
                    placeholder="Enter Smart Card Number"
                    className="flex-1 rounded-2xl border border-slate-300 p-4"
                  />

                  <button
                    onClick={verify}
                    className="rounded-2xl bg-slate-900 px-6 text-white flex items-center gap-2"
                  >
                    <Search size={18} />
                    Verify
                  </button>

                </div>

              </div>

              {customer && (

                <div className="rounded-2xl border border-green-200 bg-green-50 p-5 mb-8">

                  <div className="flex items-center gap-3">

                    <BadgeCheck className="text-green-600"/>

                    <div>

                      <h3 className="font-semibold">
                        {customer.name}
                      </h3>

                      <p className="text-sm text-slate-500">
                        Current Bouquet: {customer.bouquet}
                      </p>

                      <p className="text-sm text-slate-500">
                        Expires: {customer.expiry}
                      </p>

                    </div>

                  </div>

                </div>

              )}

              {/* Packages */}

              <label className="block mb-4 font-medium">
                Select Package
              </label>

              <div className="space-y-4">

                {packages.map((item) => (

                  <button
                    key={item.id}
                    onClick={() =>
                      setSelectedPackage(item)
                    }
                    className={`w-full rounded-3xl border p-6 text-left transition ${
                      selectedPackage.id === item.id
                        ? "border-violet-600 bg-violet-50"
                        : "border-slate-200 hover:border-violet-300"
                    }`}
                  >

                    <div className="flex justify-between">

                      <div>

                        <h3 className="text-xl font-bold">
                          {item.name}
                        </h3>

                        <p className="text-slate-500 mt-1">
                          {item.channels}
                        </p>

                      </div>

                      <div className="text-right">

                        <h3 className="text-2xl font-bold">
                          ₦{item.price.toLocaleString()}
                        </h3>

                      </div>

                    </div>

                  </button>

                ))}

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

                <Row title="Provider" value={provider}/>
                <Row title="Smart Card" value={smartCard || "--"}/>
                <Row title="Package" value={selectedPackage.name}/>
                <Row title="Amount" value={`₦${selectedPackage.price.toLocaleString()}`}/>
                <Row title="HBAR" value={`${hbar} HBAR`}/>
                <Row title="Network Fee" value="0.05 HBAR"/>

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

            <div className="mt-6 rounded-3xl border border-green-200 bg-green-50 p-6">

              <div className="flex items-center gap-3">

                <CheckCircle2 className="text-green-600"/>

                <div>

                  <h3 className="font-semibold">
                    Fast Activation
                  </h3>

                  <p className="text-sm text-slate-500">
                    Your subscription is activated immediately after confirmation.
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