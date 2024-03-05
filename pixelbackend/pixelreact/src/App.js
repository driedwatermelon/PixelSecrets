// App.js
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Encode from "./pages/encode";
import Decode from "./pages/decode";
import FooterComponent from "./components/footer/footer";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Encode />} /> {/* Set root path to Encode */}
            <Route path="/encode" element={<Encode />} />
            <Route path="/decode" element={<Decode />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
