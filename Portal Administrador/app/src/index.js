import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Medias/style.css';
import './movil.css';
import Home from './components/home';
import Pasajeros from './components/pasajeros';
import Choferes from './components/Choferes';
import Transacciones from './components/transacciones';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/pasajeros" element={<Pasajeros />} />
          <Route path="/choferes" element={<Choferes />} />
          <Route path="/transacciones" element={<Transacciones />} />
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
