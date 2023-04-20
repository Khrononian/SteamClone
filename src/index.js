import React, { useEffect, useState, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import ContextData from './ContextData';
import Login from './Routes/Login';
import GamePage from './Routes/GamePage';
import Category from './Routes/Category';
import SignUp from './Routes/SignUp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextData>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/app/:id' element={<GamePage />}/>
        <Route path='/category/:name' element={<Category />}/>
      </Routes>
    </BrowserRouter>
  </ContextData>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
