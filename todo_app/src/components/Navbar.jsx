import { useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("token");

        navigate("/");
    };

    return (

        <div style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
            background: "#eee"
        }}>

            <h2>Todo App</h2>

            <button onClick={logout}>
                Logout
            </button>

        </div>
    );
}

export default Navbar;