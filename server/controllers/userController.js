const db = require("../config/db");

const registerUser = async (req, res) => {
    try {
        const { full_name, email, mobile, password } = req.body;

        const sql = `
            INSERT INTO users (full_name, email, mobile, password)
            VALUES (?, ?, ?, ?)
        `;

        await db.execute(sql, [full_name, email, mobile, password]);

        res.status(201).json({
            message: "User registered successfully"
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Registration failed"
        });
    }
};

module.exports = { registerUser };