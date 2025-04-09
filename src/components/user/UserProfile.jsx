import React, { useEffect, useState } from "react";
import axios from "axios";
import '../css/userProfile.css'
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
    const navigate = useNavigate()
    const userId = localStorage.getItem("id");
    const [user, setUser] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        username: "",
        email: "",
    });

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get(`/user/${userId}`);
                console.log(res.data.data)
                setUser(res.data.data);
                setFormData({
                    username: res.data.data.username,
                    email: res.data.data.email,
                });
            } catch (error) {
                console.error("Error fetching user data", error);
            }
        };

        fetchUser();
    }, [userId]);

    const handleEditToggle = () => {
        setEditMode(!editMode);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        try {
            const res = await axios.put(`/user/update/${userId}`, formData);
            setUser(res.data.data);
            setEditMode(false);
        } catch (error) {
            console.error("Error updating profile", error);
        }
    };
    const handleDeleteAccount = async () => {
        if (!user || !user._id || user._id.length !== 24) {
            console.error("Invalid or missing user ID:", user?._id);
            alert("Invalid user ID. Cannot delete account.");
            return;
        }
    
        const confirmDelete = window.confirm("Are you sure you want to delete your account? This cannot be undone.");
        if (!confirmDelete) return;
    
        console.log("User ID being deleted:", user._id);
    
        try {
            await axios.delete(`/user/deleteaccount/${user._id}`);
            localStorage.clear();
            window.dispatchEvent(new Event("roleChange"));
            navigate("/login");
        } catch (error) {
            console.error("Error deleting account:", error);
            alert("Failed to delete account");
        }
    };

    if (!user) return <div className="userProfile-loading">Loading...</div>;

    return (
        <div className="userProfile-container">
            <h2 className="userProfile-welcome">Hello, {user.username} 👋</h2>

            <div className="userProfile-info">
                <div className="userProfile-field">
                    <label>Name:</label>
                    {editMode ? (
                        <input
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                    ) : (
                        <span>{user.username}</span>
                    )}
                </div>

                <div className="userProfile-field">
                    <label>Email:</label>
                    {editMode ? (
                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    ) : (
                        <span>{user.email}</span>
                    )}
                </div>

                <div className="userProfile-field">
                    <label>Joined:</label>
                    <span>{new Date(user.createdAt).toLocaleDateString()}</span>
                </div>
            </div>

            <div className="userProfile-actions">
                {editMode ? (
                    <button className="userProfile-saveBtn" onClick={handleSave}>Save</button>
                ) : (
                    <button className="userProfile-editBtn" onClick={handleEditToggle}>Edit Profile</button>
                )}
            </div>
            <button className="userProfile-delete-btn" onClick={handleDeleteAccount}>
                Delete My Account
            </button>

        </div>
    );
};

export default UserProfile;
