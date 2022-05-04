import { useNavigate, useParams } from 'react-router-dom'

export const PlaylistDetail = () => {
  const navigate = useNavigate()
  //   onClick={() => navigate('order-summary')}
  // {replace: true} to replace the history in the stack
  const { playlistId } = useParams()
  return (
    <>
      <h2>Details about playlist {playlistId}</h2>
      {/* <button>Place Order</button> */}
    </>
  )
}
