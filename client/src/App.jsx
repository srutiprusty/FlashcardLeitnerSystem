import React from "react";
import { FlashcardProvider } from "./context/FlashcardContext.jsx";
import Home from "./pages/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <FlashcardProvider>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </FlashcardProvider>
    </BrowserRouter>
  );
};

export default App;
