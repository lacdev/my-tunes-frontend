// import { useState } from 'react'
// import { useAuth } from '../utils/auth'
import { useNavigate, useLocation } from 'react-router-dom'

export const Login = () => {
  //   const [user, setUser] = useState('')
  //   const auth = useAuth()
  const navigate = useNavigate()
  //   const location = useLocation()

  //   const redirectPath = location.state?.path || '/'

  const handleLogin = () => {
    // auth.login(user)
    // navigate(redirectPath, { replace: true })
  }

  //   setUser(e.target.value)
  return (
    <div>
      <label>
        Username:{' '}
        <input type="text" onChange={(e) => console.log(e.target.value)} />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}
