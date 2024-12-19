import { Navigate, Route, Routes } from 'react-router'
import { checkToken } from './services/utils.ts'
import LoginPage from './pages/auth/login.tsx'
import HomePage from './pages/home/index.tsx'

const App = () => {
  return (
    <Routes>
      <Route path='login' element={<LoginPage />} />
      <Route
        path='/home'
        element={checkToken() ? <HomePage /> : <Navigate to='/login' />}
      />

      {/* Redirect to Login if route not found */}
      <Route path='*' element={<Navigate to='/login' />} />
    </Routes>
  )
}

export default App
