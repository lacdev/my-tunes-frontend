import axios from 'axios'

export const getFetchDemo = async () => {
  const URL = 'localhost'
  const data = await axios.get(URL)
  return data
}
