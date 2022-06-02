import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../components/home/home";
import { Contact } from "../components/contact/contact";
import { Help } from "../components/help/help";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="help" element={<Help />} />
    </Routes>
  );
};
export default Router;
