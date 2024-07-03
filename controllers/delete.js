import db from "../DB.js";

export const delete1 = (req, res)=>{
    const sql = "DELETE FROM new_table WHERE id = 3"

    db.query(sql,(err,result)=>{
        if(err) return res.status(500).send(err);
        return res.status(200).send({message: "deleted...", result})

    });
};