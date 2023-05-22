import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import Errors from "../pages/Errors";
import Home from "../pages/Home";
import BooksView from "../features/Books/BooksView";
import AddBook from "../features/Books/AddBook";

const Index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Errors />} />
        <Route path="show-book" element={<BooksView />} />
        <Route path="add-book" element={<AddBook />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
