const db = require("../config/db");

const registerUser = (req, res) => {
    const { full_name, email, mobile, password } = req.body;

    const sql = `
        INSERT INTO users (full_name, email, mobile, password)
        VALUES (?, ?, ?, ?)
    `;

    db.query(sql, [full_name, email, mobile, password], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                message: "Registration failed"
            });
        }

        res.status(201).json({
            message: "User registered successfully",
            userId: result.insertId
        });
    });
};

module.exports = { registerUser };