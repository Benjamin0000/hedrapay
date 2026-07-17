import { useState } from "react";
import {
  Globe,
  Search,
  BadgeCheck,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import MainLayout from "../components/layout/MainLayout";

const plans = [
  {
    id: 1,
    name: "Home Basic",
    speed: "10 Mbps",
    validity: "30 Days",
    price: 10000,
  },
  {
    id: 2,
    name: "Home Plus",
    speed: "20 Mbps",
    validity: "30 Days",
    price: 18000,
  },
  {
    id: 3,
    name: "Home Premium",
    speed: "50 Mbps",
    validity: "30 Days",
    price: 30000,
  },
];

export default function Internet() {
  const [provider, setProvider] = useState("Spectranet");
  const [customerId, setCustomerId] = useState("");
  const [customer, setCustomer] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(plans[0]);

  const rate = 450;

  const hbar = (
    selectedPlan.price / rate
  ).toFixed(2);

  const verifyCustomer = () => {
    if (!customerId) return;

    setCustomer({
      name: "Benjamin O.",
      address: "Life Camp, Abuja",
    });
  };

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center gap-2 text-slate-500 mb-8">
          Dashboard
          <ChevronRight size={16}/>
          Internet
        </div>

        <div className="grid grid-cols-3 gap-8">

          {/* LEFT */}

          <div className="col-span-2">

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <div className="flex items-center gap-4 mb-8">

                <div className="h-16 w-16 rounded-2xl bg-green-100 flex items-center justify-center">

                  <Globe
                    className="text-green-600"
                    size={30}
                  />

                </div>

                <div>

                  <h1 className="text-3xl font-bold">
                    Internet Subscription
                  </h1>

                  <p className="text-slate-500 mt-1">
                    Pay for fibre and broadband using HBAR.
                  </p>

                </div>

              </div>

              {/* ISP */}

              <div className="mb-6">

                <label className="block mb-2 font-medium">
                  Internet Provider
                </label>

                <select
                  value={provider}
                  onChange={(e)=>setProvider(e.target.value)}
                  className="w-full rounded-2xl border border-slate-300 p-4"
                >
                  <option>Spectranet</option>
                  <option>Smile</option>
                  <option>FibreOne</option>
                  <option>IPNX</option>
                  <option>Starlink</option>
                </select>

              </div>

              {/* Customer */}

              <div className="mb-6">

                <label className="block mb-2 font-medium">
                  Customer ID
                </label>

                <div className="flex gap-3">

                  <input
                    value={customerId}
                    onChange={(e)=>setCustomerId(e.target.value)}
                    placeholder="Customer ID"
                    className="flex-1 rounded-2xl border border-slate-300 p-4"
                  />

                  <button
                    onClick={verifyCustomer}
                    className="rounded-2xl bg-slate-900 px-6 text-white flex items-center gap-2"
                  >
                    <Search size={18}/>
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
                        {customer.address}
                      </p>

                    </div>

                  </div>

                </div>

              )}

              {/* Plans */}

              <label className="block mb-4 font-medium">
                Choose a Plan
              </label>

              <div className="grid grid-cols-2 gap-5">

                {plans.map((plan)=>(

                  <button
                    key={plan.id}
                    onClick={()=>setSelectedPlan(plan)}
                    className={`rounded-3xl border p-6 text-left transition ${
                      selectedPlan.id===plan.id
                      ? "border-violet-600 bg-violet-50"
                      : "border-slate-200 hover:border-violet-300"
                    }`}
                  >

                    <h3 className="text-xl font-bold">
                      {plan.name}
                    </h3>

                    <p className="mt-2 text-slate-500">
                      {plan.speed}
                    </p>

                    <p className="text-slate-500">
                      {plan.validity}
                    </p>

                    <p className="mt-5 text-lg font-bold text-violet-600">
                      ₦{plan.price.toLocaleString()}
                    </p>

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
                <Row title="Customer ID" value={customerId || "--"}/>
                <Row title="Plan" value={selectedPlan.name}/>
                <Row title="Amount" value={`₦${selectedPlan.price.toLocaleString()}`}/>
                <Row title="HBAR" value={`${hbar} HBAR`}/>
                <Row title="Fee" value="0.05 HBAR"/>

                <hr className="border-slate-700"/>

                <div className="flex justify-between text-xl font-bold">

                  <span>Total</span>

                  <span>
                    {(Number(hbar)+0.05).toFixed(2)} HBAR
                  </span>

                </div>

              </div>

              <button className="mt-8 w-full rounded-2xl bg-violet-600 py-4 font-semibold flex items-center justify-center gap-2 hover:bg-violet-700">

                Continue

                <ArrowRight size={18}/>

              </button>

            </div>

            <div className="mt-6 rounded-3xl border border-green-200 bg-green-50 p-6">

              <div className="flex items-center gap-3">

                <CheckCircle2 className="text-green-600"/>

                <div>

                  <h3 className="font-semibold">
                    Instant Activation
                  </h3>

                  <p className="text-sm text-slate-500">
                    Your broadband subscription is activated after successful payment.
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