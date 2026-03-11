import { useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";

function Register() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await API.post("/auth/register", form);

        alert("User Registered");

        navigate("/login");
    };

    return (



        <div>
            <form onSubmit={handleSubmit}>

                <input name="name" placeholder="Name" onChange={handleChange} />

                <input name="email" placeholder="Email" onChange={handleChange} />

                <input type="password" name="password" placeholder="Password" onChange={handleChange} />

                <button type="submit">Register</button>

            </form>


            <p style={{ marginTop: "10px" }}>

                Already have an account?{" "}
                <Link to="/login">
                    Login
                </Link>

            </p>
        </div>
    );
}

export default Register;