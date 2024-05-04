import Header from "./Header1";
import { Link, useNavigate } from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import "./Signup.css";
function Signup() {
    const [ username,setusername]=useState('');
    const [ password,setpassword]=useState('');
    const navigate = useNavigate();
    const handleApi=()=>{
        
        const url='http://localhost:4000/signup';
        const data={username,password};
        axios.post(url,data)
        .then((res)=>{
           
            if(res.data.message){
               // alert(res.data.message);
               navigate('/login')
            }
        })
        .catch((err)=>{
           
            alert('SERVER ERR')
        })
    }
    
    return (
        <div>
        
        <div className="mainsignup">
        <div className="signup-container">
            
            <h3>SIGNUP</h3>
            <br></br>
            <div className="input-field">
            USERNAME
            <input type="text" value={username}
            onChange={(e)=>{
                setusername(e.target.value)
            }} />
            </div>
            <br></br>
            <div className="input-field">
            PASSWORD
            <input type="text" value={password}
            onChange={(e)=>{
                setpassword(e.target.value)
            }}  />
            </div>
            <br></br>
            <button className="signup-btn" onClick={handleApi}>SIGNUP</button>
            <Link to="/login" className="signup-link" style={{ color: 'white' , fontWeight: 'bold'}}>LOGIN</Link>
        </div>
        </div>
        </div>
    )
}
export default Signup;