import React from "react";
import "./App.css";
import LandingPage from "./LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Postview from "../Postview";
import Form from "./form";
function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="./Postview.js" element={<Postview />} />
          <Route path="./form.js" element={<Form />} />
          <Route path="/Homepage" element={<Postview />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
