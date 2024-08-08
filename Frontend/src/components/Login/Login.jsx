import "./App.css";
import Signin from "./components/Signin";
import Banner from "./components/Banner";

export default function Login(props) {
    return (
        <div className="login-container">
            <Signin setuser={props.setuser} />
            <Banner />
        </div>
    );
}