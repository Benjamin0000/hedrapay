export default function SummaryCard({
  amount = 2000,
  hbar = 4.44,
  fee = 0.05,
}) {
  return (
    <div className="rounded-3xl bg-slate-900 p-8 text-white">
      <h2 className="text-xl font-semibold">
        Payment Summary
      </h2>

      <div className="mt-8 space-y-4">
        <Row
          label="Amount"
          value={`₦${amount.toLocaleString()}`}
        />

        <Row
          label="Exchange Rate"
          value="1 HBAR = ₦450"
        />

        <Row
          label="HBAR"
          value={`${hbar} HBAR`}
        />

        <Row
          label="Network Fee"
          value={`${fee} HBAR`}
        />

        <hr className="border-slate-700" />

        <Row
          big
          label="Total"
          value={`${(hbar + fee).toFixed(2)} HBAR`}
        />
      </div>
    </div>
  );
}

function Row({ label, value, big }) {
  return (
    <div className="flex justify-between">
      <span
        className={
          big
            ? "text-lg font-bold"
            : "text-slate-400"
        }
      >
        {label}
      </span>

      <span
        className={
          big
            ? "text-lg font-bold"
            : ""
        }
      >
        {value}
      </span>
    </div>
  );
}