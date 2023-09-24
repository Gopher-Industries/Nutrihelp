import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Access from './components/Access-Notif';
import Allergy from './components/allergy-diet-meal';
import Plan from './components/plan';
import Preference from './components/pref-dis-health';
import Profile from './components/Profile';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/access" element={<Access />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/preference" element={<Preference />} />
        <Route path="/allergy" element={<Allergy />} />
        
      </Routes>
    </Router>
  );
}

export default AppRoutes;