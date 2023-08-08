import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./components/organisms/loading.organism";

const AreaPage = React.lazy(() => import("./components/pages/area.page"));
const WeatherPage = React.lazy(() => import("./components/pages/weather.page"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/area" element={<AreaPage />} />
          <Route path="/weather" element={<WeatherPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
