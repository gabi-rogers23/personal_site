import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = () => {
  return (<div>
    Hello World
  </div>)
};

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
);