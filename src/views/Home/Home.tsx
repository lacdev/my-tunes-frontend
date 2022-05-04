import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigate = useNavigate()
  //   onClick={() => navigate('order-summary')}
  // {replace: true} to replace the history in the stack
  return (
    <>
      <h2>Home Page</h2>
      {/* <button>Place Order</button> */}
    </>
  )
}
