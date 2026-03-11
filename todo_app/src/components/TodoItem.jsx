import { useState } from "react";

function TodoItem({ todo, deleteTodo, updateTodo }) {

    const [editing, setEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(todo.title);

    const handleUpdate = () => {
        updateTodo(todo.id, newTitle);
        setEditing(false);
    };

    return (
        <div
            style={{
                border: "1px solid #ddd",
                padding: "10px",
                marginTop: "10px",
                display: "flex",
                justifyContent: "space-between"
            }}
        >

            {editing ? (
                <input
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                />
            ) : (
                <p>{todo.title}</p>
            )}

            <div>

                {editing ? (
                    <button onClick={handleUpdate}>Save</button>
                ) : (
                    <button onClick={() => setEditing(true)}>Edit</button>
                )}

                <button onClick={() => deleteTodo(todo.id)}>
                    Delete
                </button>

            </div>

        </div>
    );
}

export default TodoItem;