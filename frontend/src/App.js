import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LogIn from './pages/account/LogIn';
import CreateAccount from './pages/account/CreateAccount';
import UserSettings from './pages/dash/UserSettings.js';
import Dashboard from './pages/Dashboard';
import ForgotPassword from './pages/account/ForgotPassword';
import GoalCreate from './pages/dash/GoalCreate';
import About from './pages/About';
import Features from './pages/Features';
import Plants from './pages/Plants';
import DashPlants from './pages/dash/DashPlants';
import LearnMore from './pages/dash/LearnMore';
import BankSettings from './pages/dash/BankSettings';
import DbTest from './DbTest';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/user-settings" element={<UserSettings />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/goal-create" element={<GoalCreate />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/about" element={<About />} />
      <Route path="/plants" element={<Plants />} />
      <Route path="/features" element={<Features />} />
      <Route path="/bank-settings" element={<BankSettings />} />
      <Route path="/dashboard-plants" element={<DashPlants />} />
      <Route path="/learn-more" element={<LearnMore />} />
      <Route path="/db-test" element={<DbTest />} />
    </Routes>
  );
}

export default App;
