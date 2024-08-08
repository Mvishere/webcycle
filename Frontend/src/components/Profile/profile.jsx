import React, { useState, useEffect } from "react";
import "./Profile.css";
import UploadedBlogs from "./components/UploadedBlogs";
import Quizzes from "./components/Quizzes";
import Reviews from "./components/Review";
import axios from "axios";

const ProfilePage = (props) => {
    const [quizhistory, setQuizhistory] = useState([]);
    const [email, setEmail] = useState("");

    useEffect(() => {
        axios
            .post("http://localhost:4000/profile", { username: props.username })
            .then((response) => {
                console.log("Data submitted successfully:", response.data);
                console.log(response.data);
                setQuizhistory(response.data[0]);
                setEmail(response[1]);
            })
            .catch((error) => {
                console.error("There was an error submitting the data:", error);
            });
    }, []);

    const [activeSection, setActiveSection] = useState("blogs");

    const renderSection = () => {
        switch (activeSection) {
            case "blogs":
                return <UploadedBlogs username={props.username} />;
            case "quizzes":
                return (
                    quizhistory && (
                        <Quizzes
                            username={props.username}
                            data={quizhistory}
                            titles={quizheading}
                        />
                    )
                );
            case "reviews":
                return <Reviews username={props.username} />;
            default:
                return <UploadedBlogs username={props.username} />;
        }
    };

    return (
        <div className="profile-container">
            <div className="profile-header">
                <h1 className="username">{props.username}</h1>
                <p className="email">{email}</p>
            </div>
            <nav className="profile-nav">
                <ul>
                    <li onClick={() => setActiveSection("blogs")}>Uploaded Blogs</li>
                    <li onClick={() => setActiveSection("quizzes")}>Attempted Quizzes</li>
                    <li onClick={() => setActiveSection("reviews")}>Reviews</li>
                </ul>
            </nav>
            <div className="profile-content">{renderSection()}</div>
        </div>
    );
};

export default ProfilePage;

const quizheading = [
    "Sustainability Basics",
    "Advanced Sustainability Concepts",
    "Sustainable Development Goals",
    "Sustainability Innovations",
];