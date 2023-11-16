import React from "react";
import ReactDOMClient from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/Home";
import Header from "./components/Header";
import "./style/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

const app = document.getElementById("root");
const root = ReactDOMClient.createRoot(app);
root.render(
  <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
    <Header />
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route exact path="/home" element={<HomeScreen />} />
    </Routes>
  </BrowserRouter>,
);
