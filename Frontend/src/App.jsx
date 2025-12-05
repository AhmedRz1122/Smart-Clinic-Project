import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Loginpage from './Pages/Loginpage'
import Registerpage from './Pages/Registerpage'

const App = () => {
  return (
    <Routes>
      {/* Redirect root to login page by default */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      
      {/* Login Page */}
      <Route path="/login" element={<Loginpage />} />
      
      {/* Register Page */}
      <Route path="/register" element={<Registerpage />} />
    </Routes>
  )
}

export default App