import { useNavigate, useParams } from 'react-router-dom'

export const ArtistDetail = () => {
  const navigate = useNavigate()
  //   onClick={() => navigate('order-summary')}
  // {replace: true} to replace the history in the stack
  const { artistId } = useParams()
  return (
    <>
      <h2>Details about artists {artistId}</h2>
      {/* <button>Place Order</button> */}
    </>
  )
}
