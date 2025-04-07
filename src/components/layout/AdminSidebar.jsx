import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import AdminDashboard from '../admin/AdminDashBoard'

const AdminSidebar = () => {
  return (
    <div className="admin-container">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-profile">
          <div className="admin-avatar"></div>
          <p className="admin-username">Admin User</p>
          <p className="admin-role">Super Admin</p>
        </div>
        <Link to="/adminsidebar/addtemplate">
          <button className="admin-add-template">+ Add New Template</button>
        </Link>
        <nav className="admin-menu">
          <ul className="admin-menu-list">
            <Link to="dashboard" className="admin-menu-item admin-active">Dashboard</Link>
            <Link to="users" className="admin-menu-item">User Management</Link>
            <Link to="templates" className="admin-menu-item">Templates</Link>
            <Link to="analytics" className="admin-menu-item">Analytics</Link>
            <Link to="settings" className="admin-menu-item">Settings</Link>
          </ul>
        </nav>
      </aside>


      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default AdminSidebar
