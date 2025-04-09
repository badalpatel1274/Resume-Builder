import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/userDashboard.css";

const UserDashboard = () => {
    const [user, setUser] = useState(null);
    const [resumes, setResumes] = useState([]);
    const userId = localStorage.getItem("id");

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get(`/user/${userId}`);
                setUser(res.data.data);
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        };

        const fetchResumes = async () => {
            try {
                const res = await axios.get(`/resumes/user/${userId}`);
                console.log(res.data)
                setResumes(res.data.data);
            } catch (error) {
                console.error("Error fetching resumes:", error);
            }
        };

        if (userId) {
            fetchUser();
            fetchResumes();
        }
    }, [userId]);

    if (!user) return <div className="userDashboard-loading">Loading Dashboard...</div>;

    const templatesUsed = [...new Set(resumes.map((r) => r.templateId?._id))].length;

    return (
        <div className="userDashboard-container">
            <h2 className="userDashboard-heading">Welcome, {user.username} 👋</h2>
            <p className="userDashboard-subtext">Here’s a quick overview of your activity.</p>

            <div className="userDashboard-stats">
                <div className="userDashboard-card">
                    <h3>Resumes Created</h3>
                    <p>{resumes.length}</p>
                </div>
                <div className="userDashboard-card">
                    <h3>Templates Used</h3>
                    <p>{templatesUsed}</p>
                </div>
            </div>
            <h3 className="userDashboard-subheading">Recent Resumes</h3>
            <div className="userDashboard-resumeList">
                {resumes.slice(0, 3).map((resume) => (
                    <div className="userDashboard-resumeCard" key={resume._id}>
                        <h4>{resume.templateId.name || "Untitled Template"}</h4>
                        <p><strong>Date:</strong> {new Date(resume.createdAt).toLocaleDateString()}</p>
                        <button>View</button>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default UserDashboard;
