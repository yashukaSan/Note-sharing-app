import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router';
import ProtectedRoute from '../components/protectedMain';
import MainPage from '../components/LandingPage';
import './App.css'
import LandingPage from '../components/LandingPage';
import LoginPage from '../components/LoginPage';
import RegisterPage from '../components/RegisterUser'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='login' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>} />

        <Route path='/success' element={<ProtectedRoute><MainPage/></ProtectedRoute>} />

        <Route path="#" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>

    // <>
    //   <section className="h-screen w-screen bg-linear-to-tr from-blue-600 via-red-500 to-cyan-300 text-red-400" >
    //     <MainPage />
        // {/* <LoginPage /> */}
        // {/* <RegisterUser/> */}
    //   </section>
    // </>
  )
}

export default App
