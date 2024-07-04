import db from "../DB.js";

export const login = (req,res)=>{
    const sql = "SELECT email, password FROM user WHERE email = ? AND password = ?";


    const {email, password} = req.body;

    db.query(sql, [email,password], (err, results) => {
        if (err) return res.status(500).send(err);
        if (results.length === 0) return res.status(404).send({ message: "User not found" });

        const user = results[0];

        if (password !== user.password) {
            return res.status(401).send({ message: "Invalid credentials" });
        }
        
        // Successful login, you can send a token or user info here
        return res.status(200).send({ message: "Login successful", user });
    });
};