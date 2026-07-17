import Dashboard from "./pages/Dashboard"
import Airtime from "./pages/Airtime"
import Electricity from "./pages/Electricity";
import Data from "./pages/Data";
import TvSubscription from "./pages/TvSubscription";
import Internet from "./pages/Internet";
import Transactions from "./pages/Transactions";
import Rewards from "./pages/Rewards";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";

export default function App() {

  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/airtime" element={<Airtime />} />
          <Route path="/electricity" element={<Electricity />} />
          <Route path="/data" element={<Data />} />
          <Route path="/tv" element={<TvSubscription />} />
          <Route path="/internet" element={<Internet />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/rewards" element={<Rewards />}/>
        </Routes>
      </AppProvider>
      </BrowserRouter>
    )
}