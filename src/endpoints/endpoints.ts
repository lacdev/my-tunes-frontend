const base_url = `${process.env.REACT_APP_SERVER_URL}/api`

export const endpoints = {
  getGenres: `${base_url}/genres/`,

  getGenre: `${base_url}/genres/`,

  postGenre: `${base_url}/genres/`,

  updateGenre: `${base_url}/genres/`,

  deleteGenre: `${base_url}/genres/`,

  getSongsByGenre: `${base_url}/genres/`,

  getProductsByGenre: `${base_url}/genres/`,

  getAlbumsByGenre: `${base_url}/genres/`,

  getPlaylistsByGenre: `${base_url}/genres/`,

  getArtists: `${base_url}/artists/`,

  getArtist: `${base_url}/artists/`,

  postArtist: `${base_url}/artists/`,

  updateArtist: `${base_url}/artists/`,

  deleteArtist: `${base_url}/artists/`,

  getAlbumsByArtist: `${base_url}/artists/`,

  getProductsByArtist: `${base_url}/artists/`,

  getSongsByArtist: `${base_url}/artists/`,

  getAlbums: `${base_url}/albums/`,

  getAlbum: `${base_url}/albums/`,

  postAlbum: `${base_url}/albums/`,

  updateAlbum: `${base_url}/albums/`,

  deleteAlbum: `${base_url}/albums/`,

  getSongsByAlbum: `${base_url}/albums/`,

  getSongByAlbum: `${base_url}/albums/`,

  getPlaylists: `${base_url}/playlist/`,

  getPlaylist: `${base_url}/playlists/`,

  postPlaylist: `${base_url}/playlist/`,

  updatePlaylist: `${base_url}/playlist/`,

  deletePlaylist: `${base_url}/playlist/`,

  addSongToPlaylist: `${base_url}/playlists/`,

  deleteSongInPlaylist: `${base_url}/playlists/`,

  getSongs: `${base_url}/songs/`,

  getSong: `${base_url}/songs/`,

  postSong: `${base_url}/songs/`,

  updateSong: `${base_url}/songs/`,

  deleteSong: `${base_url}/songs/`,

  getProducts: `${base_url}/products/`,

  getProduct: `${base_url}/products/`,

  updateProduct: `${base_url}/products/`,

  deleteProduct: `${base_url}/products/`,

  logIn: `${base_url}/auth/login`,

  signUp: `${base_url}/auth/register`,

  usersAdmin: `${base_url}/users/`,

  updateUserAdmin: `${base_url}/users/`,

  deleteUserAdmin: `${base_url}/users/`,

  usersMe: `${base_url}/users/me`,

  usersMeCart: `${base_url}/users/me/cart`,

  usersMeOrders: `${base_url}/users/me/orders`,

  usersMePlaylists: `${base_url}/users/me/playlists`,

  usersMeSongs: `${base_url}/users/me/songs`,

  saveLike: `${base_url}/places`,

  deleteLike: `${base_url}/places`,
}
