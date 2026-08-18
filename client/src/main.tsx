import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import ProtectedRoute from "../components/protectedMain";
import MainPage from "../mainSec/MainPage.tsx";
import "./App.css";
import LoginPage from "../components/LoginPage";
import RegisterPage from "../components/RegisterUser";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route
          path="/success"
          element={
            <ProtectedRoute>
              <MainPage />
            </ProtectedRoute>
          }
        />

        <Route path="#" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  </StrictMode>,
);
