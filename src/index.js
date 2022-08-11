import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registro from './Views/Registro';
import Ventas from './Views/Ventas';
import Estadisticas from './Views/Estadisticas';
import Config from './Views/Config';
import ReProduct from './Views/Re_product'
import Cart from './Views/Cart';
//import Login from './Login/Login';

ReactDOM.render(
  <BrowserRouter>


    <Routes>
      <Route path='/'  element={<App />}>
        
        <Route path='/ventas' exact element={<Ventas />} />
        <Route path='/cart/productos' exact element={<Cart />} />
        <Route path='/stock' exact element={<ReProduct />} />
        <Route path='/estadisticas' exact element={<Estadisticas />} />
        <Route path='/configuracion' exact element={<Config />} />

        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />        
      </Route>
      
      <Route path='/Registro' exact element={<Registro />} />
    </Routes>


  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
