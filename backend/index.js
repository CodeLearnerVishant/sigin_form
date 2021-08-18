import express from "express";
import cors from "cors";
import mongoose from "mongoose";



const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors())

//Database Connection
mongoose.connect('mongodb://localhost:27017/myloginapp', {
    useNewUrlParser: true, useUnifiedTopology:true},
    ()=> console.log("Database connected"));

//UserSchema
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
});

const User = mongoose.model("User", userSchema);


// ROUTES
app.post("/login", (req, res) => {
    const {email, password} = req.body;
    User.findOne({email:email}, (err, user) => {
        if (user) {
            if (password===user.password) {
                res.send({message:"Login success", user: user})
            } else {
                res.send({message:"Password did'nt match"})
            }
        } else {
            res.send({message:"user have'nt account "})
        }
    })
})

app.post("/signup", (req, res) => {
 const {name, email, password}=req.body;
 User.findOne({email:email}, (err, user) => {
     if (user) {
         res.send({message:"User already exist"})
     } else {
        const user = new User({
            name,
            email,
            password
        })
       user.save(err => {
           if (err) {
               res.send(err)
           } else {
               res.send({message:" account successfully created. Please Login Now"})
           }
       })
     }
 })
 

})

app.listen(7000, ()=>{
    console.log("app start on port: 7000");
})    