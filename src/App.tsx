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

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="artists" element={<Artists />} />
        <Route path="genres" element={<Genres />} />
        <Route path="albums" element={<Albums />} />
        <Route path="songs" element={<Songs />} />
        <Route path="user" element={<User />}>
          <Route index element={<UserDashboard />} />
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
    </>
  )
}

export default App
