import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/userResumes.css";

const UserResumes = () => {
  const userId = localStorage.getItem("id");
  const [resumes, setResumes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const res = await axios.get(`/resumes/user/${userId}`);
        setResumes(res.data.data);
      } catch (err) {
        console.error("Failed to fetch resumes", err);
      }
    };

    fetchResumes();
  }, [userId]);

  return (
    <div className="userresumes-wrapper">
      <h2 className="userresumes-heading">📝 My Resumes</h2>
      {resumes.length === 0 ? (
        <p className="userresumes-empty">No resumes found.</p>
      ) : (
        <div className="userresumes-grid">
          {resumes.map((resume) => (
            <div key={resume._id} className="userresumes-card">
              <h3>{resume.templateId?.name || "Untitled Template"}</h3>
              <p>
                <strong>Created:</strong>{" "}
                {new Date(resume.createdAt).toLocaleDateString()}
              </p>
              <div className="userresumes-actions">
                <button
                  className="userresumes-preview-btn"
                  onClick={() => navigate(`/preview/${resume._id}`)}
                >
                  Preview
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserResumes;
