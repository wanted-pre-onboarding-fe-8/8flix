import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import MyList from "./pages/MyList";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/my-list" element={<MyList />}></Route>
    </Routes>
  );
}
