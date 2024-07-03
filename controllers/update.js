import db from "../DB.js"

export const update = (req,res)=>{
    const sql = "UPDATE new_table SET name = ?, email = ?, contact = ? WHERE id = ?";

    const value = req.body
    db.query(sql,[value.name, value.email, value.contact, value.id],(err, result)=>{
        if(err) return res.status(500).send(err);
        return res.status(200).send({message: "value Updated", result})
    })
}