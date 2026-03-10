import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {

        e.preventDefault();

        const res = await API.post("/auth/login", { email, password });

        localStorage.setItem("token", res.data.token);

        navigate("/dashboard");
    };

    return (

        <form onSubmit={handleLogin}>

            <input
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Login</button>

        </form>

    );
}

export default Login;