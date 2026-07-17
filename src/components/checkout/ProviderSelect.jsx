import { useMemo } from "react";

const providers = {
  Nigeria: [
    "MTN",
    "Airtel",
    "Glo",
    "9mobile",
  ],
  Ghana: [
    "MTN Ghana",
    "Vodafone",
    "AirtelTigo",
  ],
  Kenya: [
    "Safaricom",
    "Airtel Kenya",
  ],
};

export default function ProviderSelect({
  country,
  value,
  onChange,
}) {
  const options = useMemo(
    () => providers[country] || [],
    [country]
  );

  return (
    <div>
      <label className="mb-2 block text-sm font-medium">
        Provider
      </label>

      <select
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className="w-full rounded-2xl border border-slate-300 p-4 focus:border-violet-600 focus:outline-none"
      >
        {options.map((provider) => (
          <option
            key={provider}
            value={provider}
          >
            {provider}
          </option>
        ))}
      </select>
    </div>
  );
}