import { useNavigate } from 'react-router-dom'

export const NotFound = () => {
  const navigate = useNavigate()
  // {replace: true} to replace the history in the stack
  return (
    <>
      <h2>404 Nothing to be found here.</h2>
      <button onClick={() => navigate('/')}>Go back to home</button>
    </>
  )
}
