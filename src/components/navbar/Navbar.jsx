import { Bell, ChevronDown, Search } from "lucide-react";
import "./navbar.scss";
import { useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
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
          <Search  className="icon" />
          <span>Search</span>
          <Bell className="icon" />
          <img src="/img/default-blue.webp" alt="profile" />
          <div className="profile">
            <ChevronDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
