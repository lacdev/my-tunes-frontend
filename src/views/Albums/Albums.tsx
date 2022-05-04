import { useNavigate } from 'react-router-dom'

export const Albums = () => {
  const navigate = useNavigate()
  //   onClick={() => navigate('order-summary')}
  // {replace: true} to replace the history in the stack
  return (
    <>
      <h2>Albums Page</h2>
      {/* <button>Place Order</button> */}
    </>
  )
}
