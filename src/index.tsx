import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import App from "./App";
import Main from "./component/Join/Main";
import Canvas from "./component/canvas/Canvas";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Main" element={<Main />} />
      <Route path="/canvas" element={<Canvas />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
