import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/board">게시판</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
