import { createContext, useContext, useMemo, useState } from "react";

const AppContext = createContext();

const countries = [
  {
    code: "NG",
    name: "Nigeria",
    currency: "₦",
    hbarRate: 450,
  },
  {
    code: "GH",
    name: "Ghana",
    currency: "₵",
    hbarRate: 32,
  },
  {
    code: "KE",
    name: "Kenya",
    currency: "KSh",
    hbarRate: 110,
  },
];

const wallet = {
  accountId: "0.0.10492839",
  balance: 2350.42,
  fiatBalance: 1057689,
};

export function AppProvider({ children }) {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const [checkout, setCheckout] = useState({
    service: "",
    provider: "",
    customerId: "",
    amount: "",
  });

  const value = useMemo(
    () => ({
      wallet,
      countries,
      selectedCountry,
      setSelectedCountry,
      checkout,
      setCheckout,
    }),
    [selectedCountry, checkout]
  );

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}