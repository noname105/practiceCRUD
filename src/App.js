import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Board from "./pages/board";
import BoardDetail from "./pages/boardDetail";
import Writing from "./pages/writing";
import Update from "./pages/update";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/:boardId" element={<BoardDetail />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </Router>
  );
}

export default App;
