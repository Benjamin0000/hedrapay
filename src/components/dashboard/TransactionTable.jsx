import { useNavigate } from "react-router-dom";
import TransactionRow from "./TransactionRow";

export default function TransactionTable() {
  const navigate = useNavigate();

  const transactions = [
    {
      id: 1,
      icon: "📱",
      title: "MTN Airtime",
      subtitle: "Today • 11:45 AM",
      amount: "₦2,000",
      hbar: "4.49 HBAR",
      status: "success",
    },
    {
      id: 2,
      icon: "⚡",
      title: "AEDC Electricity",
      subtitle: "Yesterday • 6:21 PM",
      amount: "₦15,000",
      hbar: "33.32 HBAR",
      status: "success",
    },
    {
      id: 3,
      icon: "📺",
      title: "DSTV Compact",
      subtitle: "2 days ago",
      amount: "₦19,500",
      hbar: "43.33 HBAR",
      status: "pending",
    },
    {
      id: 4,
      icon: "📶",
      title: "MTN Data",
      subtitle: "4 days ago",
      amount: "₦5,000",
      hbar: "11.11 HBAR",
      status: "failed",
    },
  ];

  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            Recent Transactions
          </h2>

          <p className="mt-1 text-slate-500">
            Your latest HBAR bill payments
          </p>
        </div>

        <button className="rounded-xl border border-slate-200 px-5 py-3 hover:bg-slate-50">
          View All
        </button>
      </div>

      <div className="space-y-3">
        {transactions.map((tx) => (
          <TransactionRow
            key={tx.id}
            {...tx}
            onClick={() => navigate(`/receipt/${tx.id}`)}
          />
        ))}
      </div>
    </section>
  );
}