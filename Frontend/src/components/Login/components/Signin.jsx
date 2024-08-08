import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Signin(props) {
    const url = "http://localhost:4000";
    const passwordIconRef = useRef(null);
    const passwordInputRef = useRef(null);
    const [text, setText] = useState("");
    const [forgotpass, setForgotpass] = useState(false);
    const [newpass, setNewpass] = useState(false);

    const history = useHistory();

    function toggle() {
        const iconClassList = passwordIconRef.current.classList;
        const password = passwordInputRef.current;

        if (iconClassList.contains("icon-see")) {
            password.type = "text";
            iconClassList.remove("icon-see");
            iconClassList.add("icon-blind");
        } else {
            password.type = "password";
            iconClassList.add("icon-see");
            iconClassList.remove("icon-blind");
        }
    }
    const [formData, setFormData] = useState({
        name: "",
        password: "",
        authcode: "",
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: value,
            };
        });
    }

    function handleForgotpass() {
        setForgotpass(true);
        const login = async (data) => {
            data["resetpass"] = true
            const result = await axios.post(`${url}/login`, data);
            setText("Enter the verification code")
        };
        login(formData);
    }

    function handleSubmit(e) {
        e.preventDefault();

        const login = async (data) => {
            data["resetpass"] = forgotpass
            const result = await axios.post(`${url}/login`, data);
            if (result.data.loggedIn === false) {
                setText(result.data.errorMessage);
            } else {
                setText("logged in yayyy!");
                history.push("/");
                props.setuser(data.name);
            }
        };
        if (!forgotpass && !newpass) {
            login(formData);
        } else if (!newpass) {
            const login = async (data) => {
                data["resetpass"] = true
                const result = await axios.post(`${url}/login`, data);
                if (result.data.error == false) {
                    setNewpass(true);
                    setForgotpass(false);
                    setText("Enter new password");
                    setFormData((prevFormData) => {
                        return {
                            ...prevFormData,
                            ["password"]: "",
                        };
                    });
                }
            };
            login(formData);
        } else {
            const login = async (data) => {
                data["resetpass"] = false
                const result = await axios.post(`${url}/login`, data);
                if (result.data.error == false) {
                    setNewpass(false);
                    history.push("/");
                    props.setuser(data.name);
                }
            };
            login(formData);
        }

    }

    return (
        <div className="signup col-2">
            <div className="form-wrapper">
                <h2>Sign in to your account</h2>
                <p>
                    Don't have an account? <Link to="/sign-up">Sign up</Link>
                </p>

                <form className="login-form" onSubmit={handleSubmit}>
                    <input
                        className="login-input"
                        type="text"
                        required
                        placeholder="Your name"
                        onChange={handleChange}
                        name="name"
                        value={formData.firstName}
                    />
                    <div className="passwordBox">
                        <input
                            className="login-input"
                            type="password"
                            ref={passwordInputRef}
                            required
                            placeholder={newpass ? "New Password" : "Password"}
                            onChange={handleChange}
                            name="password"
                            value={formData.password} //password will be encrypted before sending same over the air!
                        />
                        <div
                            onClick={toggle}
                            ref={passwordIconRef}
                            className="background icon-see"
                        ></div>
                    </div>
                    {forgotpass &&
                        <input
                            className="login-input"
                            type="text"
                            required
                            placeholder="Verification code"
                            onChange={handleChange}
                            name="authcode"
                            value={formData.authcode}
                        />
                    }
                    <Link to="/login" onClick={handleForgotpass}>Forgot password?</Link>
                    <small className="login-error-text">{text}</small>
                    <button className="login-button">Next</button>
                    <small>
                        By clicking the 'Next' button, you agree to creating a free account
                        and to <Link to="/terms">Terms of Service</Link> and to{" "}
                        <Link to="/privacy">Privacy Policy</Link>
                    </small>
                </form>
            </div>
        </div>
    );
}