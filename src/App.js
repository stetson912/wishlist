import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//hooks
import { useAuthContext } from './hooks/useAuthContext'
//pages and components
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'
import Dashboard from './pages/dashboard/Dashboard'

function App() {
  const { authIsReady } = useAuthContext()
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/signup" element={<Signup />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
