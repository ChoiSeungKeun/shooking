import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Payment from "./components/Payment";
import Cart from "./pages/Cart";
import Notfound from "./pages/Notfound";
import PaymentModal from "./components/PaymentModal";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
      <PaymentModal />
    </>
  );
}

export default App;
