import { useState } from "react";

function TodoForm({ createTodo }) {

    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!title) return;

        createTodo(title);

        setTitle("");
    };

    return (

        <form onSubmit={handleSubmit}>

            <input
                placeholder="Enter todo..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <button type="submit">
                Add Todo
            </button>

        </form>
    );
}

export default TodoForm;