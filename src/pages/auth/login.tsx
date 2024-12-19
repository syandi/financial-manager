import { useState } from 'react'
import { useNavigate } from 'react-router'
import { dbLogin } from '@/services/auth'
import { createToken } from '@/services/utils'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = async () => {
    const user  = await dbLogin(username)
    if (user) {
      const getToken = createToken(JSON.stringify(user))
      localStorage.setItem('authToken', getToken)
      navigate('/home')
    } else {
      alert('Invalid username or password')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen">
      <h1 className='mb-4 text-2xl uppercase tracking-widest font-bold text-primary'>
        Financial Manager
      </h1>
      <div className="w-full bg-white rounded-lg shadow border sm:max-w-md">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-semibold leading-tight tracking-tight">
            Sign in to your account
          </h1>
          <form className="space-y-4 md:space-y-6" action="#">
              <div>
                  <label
                    htmlFor="username"
                    className="text-left block mb-2 text-sm font-medium"
                  >Username</label>
                  <input
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="username"
                    className="form-input"
                    required
                  />
              </div>
              <div>
                  <label
                    htmlFor="password"
                    className="text-left block mb-2 text-sm font-medium"
                  >Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="form-input"
                    required
                  />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary hover:bg-primary/90 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                onClick={handleLogin}
              >Sign in</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
