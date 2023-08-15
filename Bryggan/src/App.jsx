import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Regler from "./pages/Regler";
import Donations from "./pages/Donations";
import Discord from "./pages/Discord";

export default function App() {
  return (
    <main>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Regler" element={<Regler />} />
          <Route path="/Donationer" element={<Donations />} />
          <Route path="/Discord" element={<Discord />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
