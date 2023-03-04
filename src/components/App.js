import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import AnimalList from "./AnimalList";

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/animalList" element={<AnimalList />}></Route>
      </Routes>
       <Footer />
    </div>
  );
}

export default App;
