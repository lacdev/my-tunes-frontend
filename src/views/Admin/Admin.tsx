import { useNavigate, Outlet } from 'react-router-dom'

export const Admin = () => {
  const navigate = useNavigate()
  //   onClick={() => navigate('order-summary')}
  // {replace: true} to replace the history in the stack
  return (
    <>
      <h2>Admin Page</h2>
      <Outlet />
      {/* <button>Place Order</button> */}
    </>
  )
}
