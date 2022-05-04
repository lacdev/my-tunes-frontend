import { useNavigate } from 'react-router-dom'

export const Artists = () => {
  const navigate = useNavigate()
  //   onClick={() => navigate('order-summary')}
  // {replace: true} to replace the history in the stack
  return (
    <>
      <h2>Artists Page</h2>
      {/* <button>Place Order</button> */}
    </>
  )
}
