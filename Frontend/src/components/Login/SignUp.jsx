import "./App.css";
import Signup from "./components/Signup";
import Banner from "./components/Banner";

export default function SignUp(props) {
    return (
        <div className="login-container">
            <Signup setuser={props.setuser} />
            <Banner />
        </div>
    );
}