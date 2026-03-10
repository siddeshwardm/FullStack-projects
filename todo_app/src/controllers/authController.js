const db = require("../config/db");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

exports.register = async (req, res) => {

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = "INSERT INTO users (name,email,password) VALUES (?,?,?)";

    db.query(sql, [name, email, hashedPassword], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({ message: "User registered successfully" });

    });

};



exports.login = (req, res) => {

    const { email, password } = req.body;

    const sql = "SELECT * FROM users WHERE email=?";

    db.query(sql, [email], async (err, results) => {

        if (results.length === 0) {
            return res.status(400).json({ message: "User not found" });
        }

        const user = results[0];

        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return res.status(400).json({ message: "Invalid password" });
        }

        const token = generateToken(user.id);

        res.json({ token });

    });

};