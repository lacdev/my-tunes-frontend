import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './views/Home/Home'
import { Navbar } from './components/Navbar/Navbar'
import { Artists } from './views/Artists/Artists'
import { Genres } from './views/Genres/Genres'
import { Albums } from './views/Albums/Albums'
import { Songs } from './views/Songs/Songs'
import { User } from './views/User/User'
import { UserDashboard } from './views/UserDashboard/UserDashboard'
import { UserOrders } from './views/UserDashboard/UserOrders'
import { UserPlaylists } from './views/UserDashboard/UserPlaylists'
import { UserSettings } from './views/UserDashboard/UserSettings'
import { NotFound } from './views/NotFound/NotFound'
import { Admin } from './views/Admin/Admin'
import { AdminDashboard } from './views/AdminDashboard/AdminDashboard'
import { AdminAlbums } from './views/AdminDashboard/AdminAlbums'
import { AdminOrders } from './views/AdminDashboard/AdminOrders'
import { AdminGenres } from './views/AdminDashboard/AdminGenres'
import { AdminUsers } from './views/AdminDashboard/AdminUsers'
import { AdminSongs } from './views/AdminDashboard/AdminSongs'
import { UserSongs } from './views/UserDashboard/UserSongs'
import { AdminSettings } from './views/AdminDashboard/AdminSettings'
import { AlbumDetail } from './views/Albums/AlbumDetail'
import { SongDetail } from './views/Songs/SongDetail'
import { Login } from './views/Login/Login'
import { Signup } from './views/Signup/Signup'
import { GenreDetail } from './views/Genres/GenreDetail'
import { ArtistDetail } from './views/Artists/ArtistDetail'
import { Playlists } from './views/Playlists/Playlists'
import { PlaylistDetail } from './views/Playlists/PlaylistsDetail'
import { Cart } from './views/Cart/Cart'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="artists" element={<Artists />} />
        <Route path="artists/:artistId" element={<ArtistDetail />} />
        <Route path="genres" element={<Genres />} />
        <Route path="genres/:genreId" element={<GenreDetail />} />
        <Route path="albums" element={<Albums />} />
        <Route path="albums/:albumId" element={<AlbumDetail />} />
        <Route path="songs" element={<Songs />} />
        <Route path="songs/:songId" element={<SongDetail />} />
        <Route path="playlists" element={<Playlists />} />
        <Route path="playlists/:playlistId" element={<PlaylistDetail />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="cart" element={<Cart />} />
        <Route path="user" element={<User />}>
          {/* <Route index element={<UserDashboard />} /> */}
          <Route path="orders" element={<UserOrders />} />
          <Route path="songs" element={<UserSongs />} />
          <Route path="playlists" element={<UserPlaylists />} />
          <Route path="settings" element={<UserSettings />} />
        </Route>
        <Route path="admin" element={<Admin />}>
          <Route index element={<AdminDashboard />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="genres" element={<AdminGenres />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="albums" element={<AdminAlbums />} />
          <Route path="songs" element={<AdminSongs />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
