import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "../components/login/Login";
import { Home } from "../components/Home/Home";
import { SignUp } from "../components/SignUp/SignUp";
import { auth } from "../firebase";
import { useState, useEffect } from "react";


export function MyRoutes(){
    const [username, setUsername] = useState([]);
    
    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if(user){
                setUsername(user.displayName);
            }else{
                setUsername("");
            }
        })
    },[]);
    // els claudators serveixen per dir que nomes s'executi una vegada

    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Home name={username}/>} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<SignUp />} />
            </Routes>
        </Router>
    )
}
