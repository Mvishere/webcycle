import React, { useState, useEffect } from "react";
import "./LoginMessage.css";

const LoginMessage = ({ show, message }) => {
    const [visible, setVisible] = useState(show);

    useEffect(() => {
        if (show) {
            setVisible(true);
        } else {
            const timer = setTimeout(() => setVisible(false), 300);
            return () => clearTimeout(timer);
        }
    }, [show]);

    return (
        visible && (
            <div className={`login-message ${show ? "show" : "hide"}`}>{message}</div>
        )
    );
};

export default LoginMessage;