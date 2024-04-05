import "./App.css";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screen/home";
import SenifoneOne from "./Screen/senifone";
import Accesories from "./Screen/accesories";
import Customer from "./Screen/customer";
import PointOfSales from "./Screen/pointsofsale";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0),
    handleCart = () => {
      setCount(count + 1);
    };
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar count={count} />

        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/senifone"
            element={<SenifoneOne />}
          />
          <Route
            path="/accesories"
            element={<Accesories handleCart={handleCart} />}
          />
          <Route
            path="/customer-service"
            element={<Customer />}
          />

          <Route
            path="/pointsofsale"
            element={<PointOfSales />}
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
