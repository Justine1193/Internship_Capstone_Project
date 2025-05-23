// ✅ All imports go first
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import LandingPage from './Pages/LandingPage/LandingPage.jsx';
import SignInPage from './Components/Register/SignIn/SignIn.jsx';
import SignUpForm from './Components/Register/SignUp/SignUp.jsx';
import Dashboard from './Pages/Dashboard/DashboardPage.jsx';

// ✅ Then your render logic
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
