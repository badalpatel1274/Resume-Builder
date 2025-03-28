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
               <li className="admin-menu-item">User Management</li>
               <li className="admin-menu-item">Templates</li>
               <li className="admin-menu-item">Analytics</li>
               <li className="admin-menu-item">Settings</li>
             </ul>
           </nav>
           <button className="admin-logout">Logout</button>
         </aside>
   
        
         <main>
        <Outlet/>
         </main>
       </div>
  )
}

export default AdminSidebar
