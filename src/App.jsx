import { Routes, Route } from "react-router";
import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import Jewellery from "./pages/Jewellery";
import Product from "./pages/Product";
import About from "./pages/About";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jewellery" element={<Jewellery />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
