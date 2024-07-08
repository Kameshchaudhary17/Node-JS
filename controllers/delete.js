import db from "../DB.js";

export const delete1 = (req, res)=>{
    const {id} = req.params;
    const sql = "DELETE FROM user WHERE id = ?"

    db.query(sql,id,(err,result)=>{
        if(err) return res.status(500).send(err);
        return res.status(200).send({message: "deleted...", result})

    });
};