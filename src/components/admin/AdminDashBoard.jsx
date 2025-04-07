import React, { useEffect, useState } from "react";
import { FaUser, FaFileAlt, FaPalette, FaCheckCircle } from "react-icons/fa";
import "../css/adminDashboard.css";
import axios from "axios";
import UserChart from "./UserChart";
import TemplateChart from "./TemplateChart";

const AdminDashboard = () => {

  const [data, setdata] = useState({
    totalUsers: 0,
    templates: 0,
  })
  const [activity, setactivity] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRes = await axios.get("/user")
        const templateRes = await axios.get("/template/alltemplate")
        const resumeRes = await axios.get("/allresume")
        console.log(userRes.data.data.length)
        console.log(templateRes.data.data.length)
        console.log(resumeRes.data.data.length)

        setdata({
          totalUsers: userRes.data.data.length,
          totalTemplate: templateRes.data.data.length,
          totalResume: resumeRes.data.data.length
        })
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
    const interval = setInterval(fetchData, 30000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const responce = await axios.get("/recentActivity")
        console.log(responce.data.activities)
        setactivity(responce.data.activities)
      } catch (error) {
        console.error(error)
      }
    }
    fetchActivity()
  }, [])
  return (


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
          <p className="admin-card-number">{data.totalUsers}</p>
        </div>
        <div className="admin-card">
          <FaFileAlt className="admin-icon" />
          <h2 className="admin-card-title">Total Resumes</h2>
          <p className="admin-card-number">{data.totalResume}</p>
        </div>
        <div className="admin-card">
          <FaPalette className="admin-icon" />
          <h2 className="admin-card-title">Templates</h2>
          <p className="admin-card-number">{data.totalTemplate}</p>
        </div>
        <div className="admin-card">
          <FaCheckCircle className="admin-icon" />
          <h2 className="admin-card-title">System Status</h2>
          <p className="admin-card-number">Healthy</p>
        </div>
      </section>

      <section className="admin-recent-activity">

        <section className="admin-charts">
          <UserChart />

          <TemplateChart />
        </section>
        <h2 className="admin-activity-title">Recent Activity</h2>
        {activity.length === 0 ? (
          <p>No recent activity found.</p>
        ) : (
          activity.map((active, index) => (
            <div className="admin-activity" key={index}>
              <p className="admin-activity-text">
                {active.message} -{" "}
                <span className="admin-activity-user">{active.user}</span>
              </p>
              <span className="admin-activity-time">{active.time}</span>
            </div>
          ))
        )}


      </section>
    </main>
  );
};

export default AdminDashboard;
