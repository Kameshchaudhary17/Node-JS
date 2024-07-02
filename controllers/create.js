import db from "../DB.js";

export const create = (req,res) =>{
    const sql = "INSERT into new_table (`name`, `email`, `contact`) VALUE (?,?,?)";

    const value = req.body;
    db.query(sql,[value.name, value.email, value.contact], (err, result)=>{
        if(err) return res.status(500).json(err);
        return res.status(200).json({message:"Data inserted successfully", result});
    })


    
};