import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from './Component/gal';
import Detail from './Component/detail';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>

        {/*     nested Route 
        <Route path="/" element={<App />} >
          <Route path="gal" element={<Gallery />} />
        </Route>
*/}
        <Route path="/" element={<App />} />
        <Route path="/gal" element={<Gallery />} />
        <Route path="/detail/:id" element={<Detail />} />

      </Routes>
    </React.StrictMode>
  </BrowserRouter >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
