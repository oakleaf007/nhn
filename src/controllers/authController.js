

import pool from "../config/dbConfig.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"


export const signup = async(req, res)=>{
    const {signupToken, password} = req.body;

    try{

        if(!signupToken, !password){
            return res.status(400).json({message: "no token or password found"});

        }


        const decoded = jwt.verify(signupToken, process.env.JWT_SECRET);
        const verifiedEmail = decoded.verifiedEmail;

        const salty = await bcrypt.genSalt(10);

        const passHash= await bcrypt.hash(password, salty);

        const insertQuery= `insert into users (email, password)
        values($1, $2);`;
         await pool.query(insertQuery, [verifiedEmail, passHash]);

        res.status(201).json({success: true, message: "user created"})
    }catch(err){
        console.error(err);
        res.status(500).json({success:false, message : "server error: "+ err.message})
    }
}

export const login = async(req, res)=>{
    const {email, password}= req.body;
    console.log(req.body)

    try{
        if(!email || !password){
            return res.status(400).json({message: "No email or password recieved"})
        }


        const result = await pool.query("select * from users where email = $1", [email.toLowerCase()]);

        
        console.log(result.rows)
        if(result.rows.length===0){
            return res.status(404).json({success:false , message: "no user found"})
        }
         const user = result.rows[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
                return res.status(400).json({success:false , message: "invalid credentials"})
        }

        const token = jwt.sign(
            {id: user.id,
                email: user.email
            }, process.env.JWT_SECRET,{expiresIn: "1h"}
        );

        res.status(200).json({success:true, message: "Login successfull", token:token})


    }catch(err){
        console.log(err);
        res.status(500).json({message: err.message})
    }
}