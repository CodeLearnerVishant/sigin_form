import React, { useEffect, useState } from 'react';
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './Components/home/Home'
import Login from './Components/login/Login'
import Signup from './Components/signup/Signup'

function App() {
    const [loginUser, setLoginUser] = useState({});

    useEffect(()=>{
        setLoginUser(JSON.parse(localStorage.getItem("Userdata")));
        
       }, []);

    const userDetails = (user) => {
          localStorage.setItem("Userdata", JSON.stringify(user));
          setLoginUser(user);
    }
    
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" >
                        {
                            loginUser && loginUser._id ? <Home userDetails={userDetails}/> :  <Login userDetails ={userDetails}/>
                        }
                        
                    </Route>
                    <Route path="/signup" >
                        <Signup/>
                    </Route>
                    <Route path="/login">
                        <Login userDetails= {userDetails}/>
                    </Route>
                </Switch>
            </Router>
           
            
        </div>
    )
}

export default App

