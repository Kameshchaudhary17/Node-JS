import db from "../DB.js";

export const register = (req,res)=>{
    const sql = "INSERT into user (`username`, `email`, `password`, `confirmpassword`) VALUE (?,?,?,?) ";

    const value = req.body

    if(password.value !== confirmpassword.value){
        return res.status(400).send({message:"password doesnot match"});
    }
    db.query(sql,[username.value, email.value, password.value, confirmpassword.value], (err,result)=>{
        if (err) return res.status(500).send(err);
        return res.status(200).send({message:"registered...", result});
    });
};