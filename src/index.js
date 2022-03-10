import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./redux/ConfigureStore";

import Home from './components/Home'
import Carts from './components/Carts';
import Login from './components/Login';
import Products from './components/Products';
import Profile from './components/Profile';
import Register from './components/Register';
import SingleProduct from './components/SingleProduct';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="products" element={<Products/>}/>
            <Route path="products/:id" element={<SingleProduct/>}/>
            <Route path="carts" element={<Carts/>}/>
            <Route path="profile" element={<Profile/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="login" element={<Login/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
