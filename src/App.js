import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./components/signin/SignIn";
import './styles/style.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign_in" element={<SignIn />} />
      {/* Add other routes here */}
    </Routes>
  );
}

export default App;
