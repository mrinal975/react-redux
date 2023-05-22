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
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Errors />} />
          <Route path="show-books" element={<BooksView />} />
          <Route path="add-book" element={<AddBook />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default Index;
