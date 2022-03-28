import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import AddTodo from './pages/AddTodo';
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import TestPage from "./pages/TestPage";
import TestUseEffect from "./pages/TestUseEffect";
import ImageGalleryPage from './pages/ImageGalleryPage';
import ShoppingCartPage from './pages/ShoppingCartPage';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='addtodo' element={<AddTodo/>} />
          <Route path='contact' element={<Contact />} />
          <Route path='testpage' element={<TestPage />} />
          <Route path='testuseeffect' element={<TestUseEffect />} />
          <Route path='imagegallerypage' element={<ImageGalleryPage />} />
          <Route path='shoppingcartpage' element={<ShoppingCartPage />} />

          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
