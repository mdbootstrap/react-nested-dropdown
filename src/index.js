import React from 'react';
import { createRoot } from "react-dom/client";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import reportWebVitals from './reportWebVitals';
import Basic from './basic/Basic';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import NavbarDropdown from './navbarDropdown/NavbarDropdown';
import NavbarDropdownLeft from './navbarDropdownLeft/NavbarDropdownLeft';
import Hover from './hover/Hover';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/basic" element={<Basic />} />
        <Route path="/navbar-dropdown" element={<NavbarDropdown />} />
        <Route path="/navbar-dropdown-left" element={<NavbarDropdownLeft />} />
        <Route path="/hover" element={<Hover />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
