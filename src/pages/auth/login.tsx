import { useState } from 'react'
import { useNavigate } from 'react-router'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      localStorage.setItem('authToken', 'fake-auth-token')
      navigate('/home')
    } else {
      alert('Invalid username or password')
    }
  }

  return (
    <div>
      <h1>Login Page</h1>
      <div>
        <label htmlFor='username'>Username: </label>
        <input
          id='username'
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='password'>Password: </label>
        <input
          id='password'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default LoginPage
