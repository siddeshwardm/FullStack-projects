import { useEffect, useState } from "react";
import API from "../services/api";

import Navbar from "../components/Navbar";
import TodoForm from "../components/TodoForm";
import TodoItem from "../components/TodoItem";

function Dashboard() {

    const [todos, setTodos] = useState([]);

    const token = localStorage.getItem("token");

    const fetchTodos = async () => {

        const res = await API.get("/todos", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        setTodos(res.data);
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    const createTodo = async (title) => {

        await API.post(
            "/todos",
            { title },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        fetchTodos();
    };

    const deleteTodo = async (id) => {

        await API.delete(`/todos/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        fetchTodos();
    };


    const updateTodo = async (id, title) => {

        const token = localStorage.getItem("token");

        await API.put(
            `/todos/${id}`,
            { title },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        fetchTodos();
    };

    return (

        <div>

            <Navbar />

            <h2>My Todos</h2>

            <TodoForm createTodo={createTodo} />

            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    deleteTodo={deleteTodo}
                    updateTodo={updateTodo}
                />
            ))}

        </div>
    );
}

export default Dashboard;