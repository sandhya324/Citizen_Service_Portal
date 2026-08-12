const db = require("../config/db");

const registerUser = async (req, res) => {
    try {
        const { full_name, email, mobile, password } = req.body;

        const sql = `
            INSERT INTO users (full_name, email, mobile, password)
            VALUES (?, ?, ?, ?)
        `;

        const hashedPassword = await bcrypt.hash(password, 10);
        await db.execute(sql, [
          full_name,
          email,
          mobile,
          hashedPassword
        ]);

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


const bcrypt = require("bcrypt");

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Check whether fields are filled
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required"
      });
    }

    // 2. Find user by email
    const [users] = await db.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    // 3. User doesn't exist
    if (users.length === 0) {
      return res.status(401).json({
        message: "Invalid email or password"
      });
    }

    const user = users[0];

    // 4. Compare entered password with stored password
    const passwordMatch = await bcrypt.compare(
      password,
      user.password
    );

    // 5. Password doesn't match
    if (!passwordMatch) {
      return res.status(401).json({
        message: "Invalid email or password"
      });
    }

    // 6. Login successful
    res.status(200).json({
      message: "Login successful",
      user: {
        id: user.id,
        full_name: user.full_name,
        email: user.email
      }
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error"
    });
  }
};



module.exports = {
    registerUser,
    loginUser
};