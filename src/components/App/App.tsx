import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../../pages/Login";
import { NotFound } from "../../pages/NotFound";
import { Layout } from "../../components/Layout";
import "./App.css";

export const App = () => {
  return (
    // <div className="app center">
    //   <Login></Login>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
