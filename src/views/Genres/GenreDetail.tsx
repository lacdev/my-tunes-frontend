import { useNavigate, useParams } from 'react-router-dom'

export const GenreDetail = () => {
  const navigate = useNavigate()
  //   onClick={() => navigate('order-summary')}
  // {replace: true} to replace the history in the stack
  const { genreId } = useParams()
  return (
    <>
      <h2>Details about genre {genreId}</h2>
      {/* <button>Place Order</button> */}
    </>
  )
}
