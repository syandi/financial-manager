import { Navigate, Route, Routes } from 'react-router'
import LoginPage from './pages/auth/login.tsx'
import HomePage from './pages/home/index.tsx'

const App = () => {
  const isAuthenticated = localStorage.getItem('authToken')

  return (
    <Routes>
      <Route path='login' element={<LoginPage />} />
      <Route
        path='/home'
        element={isAuthenticated ? <HomePage /> : <Navigate to='/login' />}
      />

      {/* Redirect to Login if route not found */}
      <Route path='*' element={<Navigate to='/login' />} />
    </Routes>
  )
}

export default App
