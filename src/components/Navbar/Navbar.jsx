import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { List, XLg } from "react-bootstrap-icons";

const Navbar = () => {
  const routes = [
    {
      element: "Home",
      path: "/",
    },
  ];

  const [showNav, setShowNav] = useState(true);

  return (
    <>
      <div className="navBar">
        <h2>FakeStore</h2>
      </div>
    </>
  );
};

export default Navbar;
