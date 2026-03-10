function TodoItem({ todo, deleteTodo }) {

    return (

        <div style={{
            display: "flex",
            justifyContent: "space-between",
            border: "1px solid #ddd",
            padding: "10px",
            marginTop: "10px"
        }}>

            <div>

                <h4>{todo.title}</h4>

                <p>Status: {todo.status}</p>

            </div>

            <button
                onClick={() => deleteTodo(todo.id)}
            >
                Delete
            </button>

        </div>

    );
}

export default TodoItem;