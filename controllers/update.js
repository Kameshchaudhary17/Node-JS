import db from "../DB.js"

export const update = (req,res)=>{
    const {id} = req.params;

    const sql = "UPDATE user SET username = ?, email = ?, password = ?, confirmpassword = ? WHERE id = ?";

    const value = req.body
    db.query(sql,[value.username, value.email, value.password, value.confirmpassword, value.id],(err, result)=>{
        if(err) return res.status(500).send(err);
        return res.status(200).send({message: "value Updated", result});
    })
}