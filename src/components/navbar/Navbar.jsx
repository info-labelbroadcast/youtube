import { Bell, ChevronDown, Search } from "lucide-react"
import "./navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img src="/img/logo-919.webp" alt="Labelflix"/>
          <span>Home</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New & Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search  className="" />
          <span>Search</span>
          <Bell className="" />
          <img src="/img/default-blue.webp" alt="profile" />
          <ChevronDown className="" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
