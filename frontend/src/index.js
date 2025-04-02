import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import './index.css';
import App from './App';
import Dashboard from './pages/Dashboard';
import LogIn from './pages/LogIn';
import CreateAccount from './pages/CreateAccount';
import GoalCreate from './pages/GoalCreate';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/Dashboard" element={<Dashboard />} />
    <Route path ="/LogIn" element={<LogIn />} />
    <Route path ="/CreateAccount" element={<CreateAccount />} />
    <Route path ="/GoalCreate" element={<GoalCreate />} />
  </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
