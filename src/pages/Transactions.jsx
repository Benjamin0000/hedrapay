import { useMemo, useState } from "react";
import {
  Search,
  Download,
  CheckCircle2,
  Clock3,
  XCircle,
  Receipt,
  Eye,
} from "lucide-react";

import MainLayout from "../components/layout/MainLayout";

const transactions = [
  {
    id: "TXN-1001",
    service: "Airtime",
    provider: "MTN",
    amount: "₦2,000",
    hbar: "4.49 HBAR",
    hash: "0.0.1049...93d1",
    status: "Successful",
    date: "Today • 11:20 AM",
    icon: "📱",
  },
  {
    id: "TXN-1002",
    service: "Electricity",
    provider: "AEDC",
    amount: "₦10,000",
    hbar: "22.22 HBAR",
    hash: "0.0.1049...21af",
    status: "Successful",
    date: "Yesterday",
    icon: "⚡",
  },
  {
    id: "TXN-1003",
    service: "TV",
    provider: "DStv",
    amount: "₦19,500",
    hbar: "43.33 HBAR",
    hash: "0.0.1049...72bc",
    status: "Pending",
    date: "2 days ago",
    icon: "📺",
  },
  {
    id: "TXN-1004",
    service: "Internet",
    provider: "Spectranet",
    amount: "₦18,000",
    hbar: "40.00 HBAR",
    hash: "0.0.1049...ab92",
    status: "Failed",
    date: "4 days ago",
    icon: "🌐",
  },
];

export default function Transactions() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(() => {
    return transactions.filter((tx) => {
      const matchesSearch =
        tx.service.toLowerCase().includes(search.toLowerCase()) ||
        tx.provider.toLowerCase().includes(search.toLowerCase()) ||
        tx.id.toLowerCase().includes(search.toLowerCase());

      const matchesFilter =
        filter === "All" || tx.status === filter;

      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="flex items-center justify-between mb-8">

          <div>

            <h1 className="text-4xl font-bold">
              Transactions
            </h1>

            <p className="text-slate-500 mt-2">
              View your complete payment history.
            </p>

          </div>

          <button className="rounded-2xl border border-slate-300 px-5 py-3 flex items-center gap-2 hover:bg-slate-50">

            <Download size={18}/>

            Export

          </button>

        </div>

        {/* Search */}

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <div className="flex gap-4 mb-6">

            <div className="relative flex-1">

              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                size={18}
              />

              <input
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                placeholder="Search transactions..."
                className="w-full rounded-2xl border border-slate-300 py-4 pl-12 pr-4"
              />

            </div>

            <select
              value={filter}
              onChange={(e)=>setFilter(e.target.value)}
              className="rounded-2xl border border-slate-300 px-5"
            >
              <option>All</option>
              <option>Successful</option>
              <option>Pending</option>
              <option>Failed</option>
            </select>

          </div>

          {/* Table */}

          <div className="overflow-hidden rounded-2xl border">

            <table className="w-full">

              <thead className="bg-slate-100">

                <tr className="text-left">

                  <th className="p-4">Service</th>
                  <th>Amount</th>
                  <th>HBAR</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Receipt</th>

                </tr>

              </thead>

              <tbody>

                {filtered.map((tx)=>{

                  const badge =
                    tx.status==="Successful"
                    ? "bg-green-100 text-green-700"
                    : tx.status==="Pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-red-100 text-red-700";

                  const Icon =
                    tx.status==="Successful"
                    ? CheckCircle2
                    : tx.status==="Pending"
                    ? Clock3
                    : XCircle;

                  return(

                    <tr
                      key={tx.id}
                      className="border-t hover:bg-slate-50"
                    >

                      <td className="p-5">

                        <div className="flex items-center gap-4">

                          <div className="h-12 w-12 rounded-xl bg-slate-100 flex items-center justify-center text-2xl">

                            {tx.icon}

                          </div>

                          <div>

                            <h3 className="font-semibold">

                              {tx.service}

                            </h3>

                            <p className="text-sm text-slate-500">

                              {tx.provider}

                            </p>

                          </div>

                        </div>

                      </td>

                      <td>{tx.amount}</td>

                      <td>{tx.hbar}</td>

                      <td>

                        <div className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm ${badge}`}>

                          <Icon size={15}/>

                          {tx.status}

                        </div>

                      </td>

                      <td>

                        <div>

                          <p>{tx.date}</p>

                          <p className="text-xs text-slate-400">

                            {tx.hash}

                          </p>

                        </div>

                      </td>

                      <td>

                        <button className="rounded-xl border px-4 py-2 hover:bg-slate-100 flex items-center gap-2">

                          <Eye size={16}/>

                          View

                        </button>

                      </td>

                    </tr>

                  )

                })}

              </tbody>

            </table>

          </div>

          {filtered.length===0 && (

            <div className="py-16 text-center">

              <Receipt
                size={55}
                className="mx-auto text-slate-300"
              />

              <h2 className="mt-5 text-xl font-semibold">

                No Transactions Found

              </h2>

              <p className="mt-2 text-slate-500">

                Try changing your search or filter.

              </p>

            </div>

          )}

        </div>

      </div>
    </MainLayout>
  );
}