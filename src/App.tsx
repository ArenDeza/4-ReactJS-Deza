/*import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";*/
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hobbies from "./pages/Hobbies";
import JSON from "./pages/JSON";
import Calculator from "./pages/Calculator";
import NoPage from "./pages/NoPage";

function App() {
  {/*
  const [count, setCount] = useState(0);
  */}

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            {/* Sets website index to Home */}
            <Route index element={<Home />} />

            {/* Page routing */}
            <Route path="/home" element={<Home />} />
            <Route path="/hobbies" element={<Hobbies />} />
            <Route path="/calculator" element={<Calculator/>} />
            <Route path="/json" element={<JSON />} />

            {/* Above page is displayed if Error 404 */}
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
