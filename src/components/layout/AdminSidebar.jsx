import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
  };

  return (
    <div className={`admin-container ${isSidebarOpen ? 'sidebar-open' : ''}`}>
       <div className="admin-hamburger" onClick={toggleSidebar}>
        &#9776; {/* Hamburger Icon */}
      </div>
      {/* Sidebar */}

      <aside className={`admin-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="admin-profile">
          <div className="admin-avatar"></div>
          <p className="admin-username">Admin User</p>
        </div>
        <Link to="/adminsidebar/addtemplate">
          <button className="admin-add-template">+ Add New Template</button>
        </Link>
        <nav className="admin-menu">
          <ul className="admin-menu-list">
            <Link to="dashboard" className="admin-menu-item admin-active">Dashboard</Link>
            <Link to="/adminsidebar/allusers" className="admin-menu-item">User Management</Link>
            <Link to="/adminsidebar/templateDashboard" className="admin-menu-item">Templates</Link>
           
          </ul>
        </nav>
      </aside>

      {/* Hamburger Icon */}
     

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminSidebar;
