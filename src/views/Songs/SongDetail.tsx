import { useNavigate, useParams } from 'react-router-dom'

export const SongDetail = () => {
  const navigate = useNavigate()
  //   onClick={() => navigate('order-summary')}
  // {replace: true} to replace the history in the stack
  const { songId } = useParams()
  return (
    <>
      <h2>Details about album {songId}</h2>
      {/* <button>Place Order</button> */}
    </>
  )
}
