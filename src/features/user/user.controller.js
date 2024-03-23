import jwt from "jsonwebtoken";
import UserRepository from "./user.repository";
import bcrypt from "bcrypt";

export default class UserController {
    

    async signUp(req, res) {
        try{
            const { name, email, password} = req.body;
            password = await bcrypt.hash(password, 10);
            const user = await UserRepository.signUp({name, email, password});
            if(user)
                return res.status(201).send({msg: "User created successfully"});
            else
                return res.status(400).send({msg: "Error in user creation"});
        }catch(err){
            return res.status(400).send({msg: "Invalid data"});
        }        
    }

    async signIn(req, res) {
        try{
            const { email, password} = req.body;
            const user = UserRepository.findByEmail(email);
            if(user){
                const isPasswordMatch = await bcrypt.compare(password, user.password);
                if(isPasswordMatch){
                    const token = jwt.sign(
                        {email: user.email},
                        'secretkey'
                    );
                    res.cookie('jwtToken', token, {httpOnly: true});
                    res.cookie.userId = user.id;
                    return res.status(200).send({msg: "User logged in successfully"});
                }else{
                    return res.status(401).send({msg: "Invalid password"});
                }
            }else{
                return res.status(401).send("Email does not exist");
            }
        }catch(err){
            res.send(400).send(err);
        }       
    }
}