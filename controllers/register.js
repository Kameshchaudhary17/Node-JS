import db from "../DB.js";

export const register = (req,res)=>{
    const sql = "INSERT into user (`username`, `email`, `password`, `confirmpassword`) VALUE (?,?,?,?) ";

    const value = req.body

    if(value.password !== value.confirmpassword){
        return res.status(400).send({message:"password doesnot match"});
    }
    db.query(sql,[value.username, value.email, value.password, value.confirmpassword], (err,result)=>{
        if (err) return res.status(500).send(err);
        return res.status(200).send({message:"registered...", result});
    });
};