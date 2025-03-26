import React from "react";
import { FaUser, FaFileAlt, FaPalette, FaCheckCircle } from "react-icons/fa";
import "../css/adminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="admin-container">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-profile">
          <div className="admin-avatar"></div>
          <p className="admin-username">Admin User</p>
          <p className="admin-role">Super Admin</p>
        </div>
        <button className="admin-add-template">+ Add New Template</button>
        <nav className="admin-menu">
          <ul className="admin-menu-list">
            <li className="admin-menu-item admin-active">Dashboard</li>
            <li className="admin-menu-item">User Management</li>
            <li className="admin-menu-item">Templates</li>
            <li className="admin-menu-item">Analytics</li>
            <li className="admin-menu-item">Settings</li>
          </ul>
        </nav>
        <button className="admin-logout">Logout</button>
      </aside>

      {/* Main Dashboard */}
      <main className="admin-main">
        <header className="admin-header">
          <h1 className="admin-title">Admin Dashboard</h1>
          <p className="admin-subtitle">
            Manage your resume builder platform and monitor system performance
          </p>
        </header>

        <section className="admin-stats">
          <div className="admin-card">
            <FaUser className="admin-icon" />
            <h2 className="admin-card-title">Total Users</h2>
            <p className="admin-card-number">1,254</p>
            <span className="admin-card-info">+12% from last month</span>
          </div>
          <div className="admin-card">
            <FaFileAlt className="admin-icon" />
            <h2 className="admin-card-title">Total Resumes</h2>
            <p className="admin-card-number">3,879</p>
            <span className="admin-card-info">+24% from last month</span>
          </div>
          <div className="admin-card">
            <FaPalette className="admin-icon" />
            <h2 className="admin-card-title">Templates</h2>
            <p className="admin-card-number">12</p>
            <span className="admin-card-info">Last added 5 days ago</span>
          </div>
          <div className="admin-card">
            <FaCheckCircle className="admin-icon" />
            <h2 className="admin-card-title">System Status</h2>
            <p className="admin-card-number">Healthy</p>
            <span className="admin-card-info">All systems operational</span>
          </div>
        </section>

        <section className="admin-recent-activity">
          <h2 className="admin-activity-title">Recent Activity</h2>
          <div className="admin-activity">
            <p className="admin-activity-text">
              New User Registration - <span className="admin-activity-user">john.smith@example.com</span>
            </p>
            <span className="admin-activity-time">10 minutes ago</span>
          </div>
          <div className="admin-activity">
            <p className="admin-activity-text">
              Resume Created - <span className="admin-activity-user">User ID #1042</span>
            </p>
            <span className="admin-activity-time">25 minutes ago</span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
