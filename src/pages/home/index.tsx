import { useNavigate } from 'react-router'
import './index.css'

const HomePage = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('authToken')
    navigate('/login')
  }

  return (
    <div>
      <h1>Home Page</h1>
      <p>Selamat datang di aplikasi!</p>
      <button onClick={handleLogout} className='btn-dark'>Logout</button>
    </div>
  )
}

export default HomePage
