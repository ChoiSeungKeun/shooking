import "./App.css";
import { Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartProvider";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Notfound from "./pages/Notfound";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
