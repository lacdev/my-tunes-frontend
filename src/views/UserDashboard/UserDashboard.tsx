import { useNavigate, Outlet } from 'react-router-dom'

export const UserDashboard = () => {
  const navigate = useNavigate()
  //   onClick={() => navigate('order-summary')}
  // {replace: true} to replace the history in the stack
  return (
    <>
      <h2>User Default Component</h2>
      <h2>Stats Maybe? </h2>
      <Outlet />
    </>
  )
}
