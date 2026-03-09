import "./App.css";
import { CheckOut } from "./pages/checkout/CheckOut";
import { HomePage } from "./pages/homepage/HomePage";
import { Tracking } from "./pages/tracking/Tracking";
import { Routes, Route } from "react-router";
import { Orders } from "./pages/orders/Orders";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/tracking" element={<Tracking />} />
      </Routes>
    </>
  );
}

export default App;
