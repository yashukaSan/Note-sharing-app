import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import ProtectedRoute from "../components/protectedMain.tsx";
import MainPage from "../mainSec/MainPage.tsx";
import "./App.css";
import LoginPage from "../components/LoginPage.tsx";
import RegisterPage from "../components/RegisterUser.tsx";
import Profile from "../mainSec/Profile.tsx"
import Support from '../components/utils/SupportForum.tsx';
import Blogs from "../components/utils/Blog.tsx";
import Contact from "../components/utils/ContactPage.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/support" element={<Support />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          path="/success"
          element={
            <ProtectedRoute>
              <MainPage />
            </ProtectedRoute>
          }
        />
        <Route path="/success/me" element={<Profile />} />

        <Route path="#" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  </StrictMode>,
);
