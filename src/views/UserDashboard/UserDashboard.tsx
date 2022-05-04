import { useNavigate, Outlet } from 'react-router-dom'

export const UserDashboard = () => {
  const navigate = useNavigate()
  //   onClick={() => navigate('order-summary')}
  // {replace: true} to replace the history in the stack
  return (
    <>
      <h2>User Dashboard Page</h2>
      <Outlet />
      {/* <button>Place Order</button> */}
    </>
  )
}
