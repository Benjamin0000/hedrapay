import { Listbox } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import ReactCountryFlag from "react-country-flag";

const countries = [
  {
    name: "Nigeria",
    code: "NG",
    currency: "NGN",
  },
  {
    name: "Ghana",
    code: "GH",
    currency: "GHS",
  },
  {
    name: "Kenya",
    code: "KE",
    currency: "KES",
  },
  {
    name: "Uganda",
    code: "UG",
    currency: "UGX",
  },
  {
    name: "South Africa",
    code: "ZA",
    currency: "ZAR",
  },
];

export default function CountrySelector() {
  const [country, setCountry] = useState(
    countries[0]
  );

  return (
    <Listbox value={country} onChange={setCountry}>
      <div className="relative w-60" style={{zIndex:1000}}>

        <Listbox.Button className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 hover:shadow-md">

          <div className="flex items-center gap-3">

            <ReactCountryFlag
              countryCode={country.code}
              svg
              style={{
                width: "1.4rem",
                height: "1.4rem",
              }}
            />

            <div className="text-left">

              <p className="text-xs text-slate-500">
                Country
              </p>

              <h3 className="font-semibold">
                {country.name}
              </h3>

            </div>

          </div>

          <ChevronDown size={18} />

        </Listbox.Button>

        <Listbox.Options className="absolute mt-3 w-full rounded-2xl border border-slate-200 bg-white shadow-xl">

          {countries.map((item) => (
            <Listbox.Option
              key={item.code}
              value={item}
              className="cursor-pointer px-4 py-4 hover:bg-violet-50"
            >
              <div className="flex items-center gap-3">

                <ReactCountryFlag
                  countryCode={item.code}
                  svg
                  style={{
                    width: "1.3rem",
                    height: "1.3rem",
                  }}
                />

                <div>

                  <h3 className="font-medium">
                    {item.name}
                  </h3>

                  <p className="text-xs text-slate-500">
                    {item.currency}
                  </p>

                </div>

              </div>

            </Listbox.Option>
          ))}

        </Listbox.Options>

      </div>
    </Listbox>
  );
}