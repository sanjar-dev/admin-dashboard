import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "../pages/Login";
import { Layout } from "../pages/Layout";
import { NoPage } from "../pages/NoPage";
import { Todo } from "../pages/Todo";

import "./App.css";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<NoPage />} />
          <Route path="todo" element={<Todo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
