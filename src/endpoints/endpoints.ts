const base_url = `${process.env.REACT_APP_SERVER_URL}/api`

export const endpoints = {
  genres: `${base_url}/genres`,

  artists: `${base_url}/artists`,

  albums: `${base_url}/albums`,

  playlists: `${base_url}/playlists`,

  songs: `${base_url}/songs`,

  products: `${base_url}/products`,

  login: `${base_url}/auth/login`,

  register: `${base_url}/auth/register`,

  usersAdmin: `${base_url}/users`,

  usersMe: `${base_url}/users/me`,

  usersMeCart: `${base_url}/users/me/cart`,

  usersMeOrders: `${base_url}/users/me/orders`,

  usersMePlaylists: `${base_url}/users/me/playlists`,

  usersMeSongs: `${base_url}/users/me/songs`,
}
