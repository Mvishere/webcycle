import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

export default function Signup(props) {
    const url = "http://localhost:4000";
    const passwordIconRef = useRef(null);
    const passwordInputRef = useRef(null);
    const [text, setText] = useState("Minimum 8 characters");
    const [auth, setAuth] = useState(false);
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
        email: "",
        password: "",
        authcode: ""
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

    function handleSubmit(e) {
        e.preventDefault();

        if (!auth) {
            if (formData.password.length < 8) {
                alert("Password needs to be at least 8 characters long");
                return;
            } else {
                const submit = async (data) => {
                    const result = await axios.post(`${url}/signup`, data);
                    if (result.data.loggedIn === false) {
                        setText(result.data.message);
                    } else {
                        setAuth(true);
                    }
                };
                submit(formData);
            }
        } else {
            const auth2fa = async (data) => {
                const result = await axios.post(`${url}/signup`, data);
                if (result.data.error === false) {
                    props.setuser(formData.name);
                    history.push("/");
                    setAuth(false);
                } else {
                    setAuth(false);
                    setFormData((prev) => {
                        return ({
                            name: prev.name,
                            email: prev.email,
                            password: prev.password,
                            authcode: "",
                        });
                    })
                    setText("Wrong auth code, please try again");
                }
            };
            auth2fa(formData);
        }
    }

    return (
        <div className="signup col-2">
            <div className="form-wrapper">
                <h2>Let's set up your account</h2>
                <p>
                    Already have an account? <Link to="/Login">Sign in</Link>
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
                    <input
                        className="login-input"
                        type="email"
                        required
                        placeholder="Email address"
                        onChange={handleChange}
                        name="email"
                        value={formData.firstName}
                    />
                    <div className="passwordBox">
                        <input
                            className="login-input"
                            type="password"
                            ref={passwordInputRef}
                            required
                            placeholder="Password"
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
                    {auth && <input
                        className="login-input"
                        type="text"
                        value={formData.authcode}
                        onChange={handleChange}
                        name="authcode"
                        placeholder="Verification code"
                    />}

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