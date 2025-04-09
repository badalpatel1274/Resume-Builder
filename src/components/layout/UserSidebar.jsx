import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Menu } from "lucide-react"; // Lucide icons (same as admin)
import "../css/userSidebar.css";

const UserSidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="userSidebar-wrapper">
      {/* Hamburger for mobile */}
      <div className="userSidebar-hamburger" onClick={toggleSidebar}>
        <Menu size={28} color="#fff" />
      </div>

      {/* Sidebar */}
      <div className={`userSidebar-container ${sidebarOpen ? "open" : ""}`}>
        <h2 className="userSidebar-logo">ResumeBuilder</h2>
        <nav className="userSidebar-links">
          <Link to="/user/account/dashboard">Dashboard</Link>
          <Link to="/user/account/myresumes">My Resumes</Link>
          <Link to="/user/account/profile">My Profile</Link>
        
        </nav>
      </div>

      {/* Page Content */}
      <div className="userSidebar-content">
        <Outlet />
      </div>
    </div>
  );
};

export default UserSidebar;
