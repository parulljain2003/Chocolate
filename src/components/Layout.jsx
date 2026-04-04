import { Outlet } from 'react-router-dom'
import AnnouncementBar from './AnnouncementBar'
import Header from './Header'
import NavBar from './NavBar'
import TopBar from './TopBar'
import './Layout.css'

export default function Layout() {
  return (
    <div className="app">
      <TopBar />
      <Header />
      <NavBar />
      <AnnouncementBar />
      <Outlet />
    </div>
  )
}
