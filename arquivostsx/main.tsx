import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Pagina2 from "./Pagina2"; // A segunda página que você criará
import PaginaFinal from "./PaginaFinal";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pagina2" element={<Pagina2 />} />
        <Route path="/paginafinal" element={<PaginaFinal />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

