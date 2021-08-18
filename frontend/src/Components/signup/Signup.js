import React, {useState} from 'react';
import axios from "axios";
import {useHistory} from "react-router-dom"
import "./Signup.css";
const Signup = () => {
    const history  = useHistory();
    const [user, setUser] = useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""
    })
    const handleChange = e =>{
        const {name ,value} = e.target;
        setUser({
            ...user, // spread operator
            [name]:value,
        })
        console.log(name)
    }

    const signUp = ()=> {
        const {name, email, password, reEnterPassword} = user;
        if (name && email && password && (password === reEnterPassword)) {
            axios.post("http://localhost:7000/signup", user)
            .then(res=> {
                alert(res.data.message);
                history.push("/");
            });
            // alert("data posted")
        } else {
            alert("invalid input");
        }
    }
    return (
        <div className="signup">
            {console.log("User",user)}
        <h1>Sign Up</h1>
        <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Your Name" ></input>
        <input type="text" name="email"value={user.email} onChange={handleChange} placeholder="Your Email"></input>
        <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Your Password" ></input>
        <input type="password" name="reEnterPassword" value={user.reEnterPassword} onChange={handleChange} placeholder="Re-enter Password"></input>
        <div className="button" onClick={signUp} >Sign Up</div>
        <div>or</div>
        <div className="button" onClick={()=> history.push("/login")} >Login</div>
    </div>
    )
}

export default Signup
