import React, { useState } from "react";

const Quizzes = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="profile-item">
            <li onClick={handleToggle} className="quiz-item-title">
                {props.title[props.data.quiz]}
            </li>
            {isOpen && (
                <div className="quiz-details">
                    <p>Score: {props.data.points}</p>
                    <p>Time of Submission: {props.data.time}</p>
                </div>
            )}
        </div>
    );
};

export default Quizzes;