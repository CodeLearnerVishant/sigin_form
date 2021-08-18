import axios from 'axios';
import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import "./Login.css";

const Login = ({userDetails}) => {
    const history  = useHistory()
    const [user, setUser] = useState({
        email:"",
        password:"",
    })
    const handleChange = e =>{
        const {name ,value} = e.target;
        setUser({
            ...user, // spread operator
            [name]:value,
        })
        // console.log(name)
    }

    const logIn = () => {
            axios.post("http://localhost:7000/login", user)
            .then(res=> {
                alert(res.data.message);
                userDetails(res.data.user)
                history.push("/")
            })
        }
    
    
    return (
        <div className="login">
            {/* {console.log("user", user)} */}
        <h1>Login</h1>
        <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
        <input type="password" name="password" value={user.password} onChange={handleChange}   placeholder="Enter your Password" ></input>
        <div className="button" onClick={logIn} >Login</div>
        <div>or</div>
        <div className="button" onClick={()=> history.push("/signup")} >Sign Up</div>
    </div>
    )
}

export default Login