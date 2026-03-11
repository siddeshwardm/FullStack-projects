const db = require("../config/db");

exports.createTodo = (req, res) => {

    const { title, description } = req.body;

    const sql = "INSERT INTO todos (title,description,user_id) VALUES (?,?,?)";

    db.query(sql, [title, description, req.userId], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({ message: "Todo created" });

    });

};



exports.getTodos = (req, res) => {

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;

    const offset = (page - 1) * limit;

    const sql = "SELECT * FROM todos WHERE user_id=? LIMIT ? OFFSET ?";

    db.query(sql, [req.userId, limit, offset], (err, results) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(results);

    });

};



exports.updateTodo = (req, res) => {

    const { title } = req.body;

    const sql = `
    UPDATE todos
    SET title=?
    WHERE id=? AND user_id=?
  `;

    db.query(sql, [title, req.params.id, req.userId], (err, result) => {

        if (err) {
            console.error(err);
            return res.status(500).json(err);
        }

        res.json({ message: "Todo updated successfully" });

    });
};



exports.deleteTodo = (req, res) => {

    const sql = "DELETE FROM todos WHERE id=? AND user_id=?";

    db.query(sql, [req.params.id, req.userId], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({ message: "Todo deleted" });

    });

};