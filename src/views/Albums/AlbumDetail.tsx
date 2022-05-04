import { useNavigate, useParams } from 'react-router-dom'

export const AlbumDetail = () => {
  const navigate = useNavigate()
  //   onClick={() => navigate('order-summary')}
  // {replace: true} to replace the history in the stack
  const { albumId } = useParams()
  return (
    <>
      <h2>Details about album {albumId}</h2>
      {/* <button>Place Order</button> */}
    </>
  )
}
