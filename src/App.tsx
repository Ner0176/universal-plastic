import "./App.css";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AreaPage from "./components/pages/area.page";
import WeatherPage from "./components/pages/weather.page";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/area" />} />
          <Route path="/area" element={<AreaPage />} />
          <Route path="/weather" element={<WeatherPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
