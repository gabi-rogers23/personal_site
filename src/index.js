import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar, Home, About, Projects, Footer } from "./components/exports"


const App = () => {
  return (<div>
    <NavBar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/projects' element={<Projects />} />
    </Routes>
    <Footer />
  </div>)
};

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
);