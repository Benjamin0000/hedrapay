import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  XCircle,
} from "lucide-react";

const statusStyles = {
  success: {
    icon: CheckCircle2,
    className:
      "bg-green-100 text-green-700 border-green-200",
    label: "Successful",
  },
  pending: {
    icon: Clock3,
    className:
      "bg-yellow-100 text-yellow-700 border-yellow-200",
    label: "Processing",
  },
  failed: {
    icon: XCircle,
    className:
      "bg-red-100 text-red-700 border-red-200",
    label: "Failed",
  },
};

export default function TransactionRow({
  icon,
  title,
  subtitle,
  amount,
  hbar,
  status = "success",
  onClick,
}) {
  const current = statusStyles[status];
  const StatusIcon = current.icon;

  return (
    <button
      onClick={onClick}
      className="group flex w-full items-center justify-between rounded-2xl border border-transparent p-5 transition hover:border-violet-200 hover:bg-violet-50"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-3xl">
          {icon}
        </div>

        <div className="text-left">
          <h3 className="font-semibold text-slate-900">
            {title}
          </h3>

          <p className="text-sm text-slate-500">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="text-right">
          <h3 className="font-bold">
            {amount}
          </h3>

          <p className="text-sm text-slate-500">
            {hbar}
          </p>
        </div>

        <div
          className={`flex items-center gap-2 rounded-full border px-3 py-2 text-sm ${current.className}`}
        >
          <StatusIcon size={16} />
          {current.label}
        </div>

        <ArrowUpRight
          size={20}
          className="text-slate-400 opacity-0 transition group-hover:opacity-100"
        />
      </div>
    </button>
  );
}