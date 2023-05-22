import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="show-book">Show Book</Link>
      <Link to="add-book">Add book</Link>
    </nav>
  );
};
export default Navbar;
