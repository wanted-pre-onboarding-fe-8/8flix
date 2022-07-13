import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../pages/main';
import MyList from '../pages/myList';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/my-list" element={<MyList />}></Route>
      <Route path="/*" element={<div>page가 없습니다.</div>}></Route>
    </Routes>
  );
}
