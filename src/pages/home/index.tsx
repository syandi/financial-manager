import './index.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { dbGetUsers } from '@/services/auth'
import { UserModel } from '@/models/User'

const HomePage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    fetchUsers()
  })

  const [users, setUsers] = useState<UserModel[]>([])
  const fetchUsers = async () => {
    const response: UserModel[]  = await dbGetUsers()
    if (response) {
      setUsers(response)
    } else {
      alert('Failed fetch users')
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('authToken')
    navigate('/login')
  }

  return (
    <div>
      <h1>Home Page</h1>
      {users.length > 0 && <p>Selamat datang {users[0].name}!</p>}
      <button onClick={handleLogout} className='btn-dark'>Logout</button>
    </div>
  )
}

export default HomePage
