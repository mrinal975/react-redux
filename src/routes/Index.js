import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Errors from "../pages/Errors";
import Home from "../pages/Home";

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Errors />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
