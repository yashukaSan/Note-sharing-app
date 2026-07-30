import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx';
import LoginPage from '../components/LoginPage.tsx';
import RegisterUser from "../components/RegisterUser.tsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterUser />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
