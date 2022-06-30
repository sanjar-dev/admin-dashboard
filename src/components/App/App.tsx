import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../../pages/Login";
import { NoPage } from "../../pages/NoPage";
import { Layout } from "../../components/Layout";
import "./App.css";
import { Todo } from "../../pages/Todo/Todo";

export const App = () => {
  return (
    // <div className="app center">
    //   <Login></Login>
    // </div>
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
