import React, { useState } from "react";
import Quizdetails from "./Quizdetails";

const Quizzhistory = (props) => {
    return (
        <div className="profile-section">
            <h2>Attempted Quizzes</h2>
            <ul>
                {props.data.map((item, index) => (
                    <Quizdetails
                        key={index}
                        data={props.data[index]}
                        title={props.titles}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Quizzhistory;