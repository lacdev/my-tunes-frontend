import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { selectAuth } from '../features/authSlice'
import { logoutThunk } from '../features/authSlice'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const auth = useAppSelector(selectAuth)

  const dispatch = useAppDispatch()

  const [user, setUser] = useState<object | null>(null)
  // const [userState, setUserState] = useState({
  //   isLoggedIn: auth.isLoggedIn,
  //   avatar: auth.user?.avatar,
  //   isAdmin: auth.user?.isAdmin,
  //   username: auth.user.username,
  //   token: auth.user?.token,
  // })

  const login = (user) => {
    setUser(user)
  }

  const logout = () => {
    setUser(null)
    dispatch(logout)
  }

  console.log('Auth?', auth)

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
