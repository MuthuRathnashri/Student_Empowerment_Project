// import { useState } from "react";
// import Header from "./Header1";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import './Login.css';
// function Login(){
// const navigate =useNavigate()
//     const [username, setusername] = useState('');
//     const [password, setpassword] = useState('');

//     const handleApi = () =>{
      
//         const url = 'http://localhost:4000/login';
//         const data = { username, password };
//         axios.post(url,data)
//         .then((res)=>{
           
//             if(res.data.message){
//                // alert(res.data.message);
//                 if(res.data.token){
//                     localStorage.setItem('token',res.data.token);
//                     localStorage.setItem('userId', res.data.userId);
//                     navigate('/');
//                 }
//             }
//         })
//         .catch((err) => {
         
//             alert('SERVER ERR')
//         })
//     }

//     return (
//         <div>
//             <div className="login-container">
//            <h3>LOGIN</h3>
//             <br></br>
//             <div className="input-field">
//             USERNAME
//             <input type="text" value={ username }
//                 onChange={(e) => {
//                     setusername(e.target.value)
//                 }}/>
//                 </div>
//             <br></br>
//             <div className="input-field">
//             PASSWORD
//             <input type="password" value={ password } 
//                 onChange={(e) =>{
//                     setpassword(e.target.value)
//                 }}/>
//                 </div>
//             <br></br>
//             <button className="login-btn" onClick={ handleApi }>LOGIN</button>
//             <Link to="/signup" className="signup-link">SIGNUP</Link>
//             </div>
//         </div>
//     );
// }
// // export default Login;
// import { useState } from "react";
// import Header from "./Header1";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import './Login.css';

// function Login() {
//     const navigate = useNavigate();
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');

//     const handleApi = () => {
//         const url = 'http://localhost:4000/login';
//         const data = { username, password };

//         axios.post(url, data)
//             .then((res) => {
//                 if (res.data.message) {
//                     if (res.data.token) {
//                         localStorage.setItem('token', res.data.token);
//                         localStorage.setItem('userId', res.data.userId);
//                         navigate('/');
//                     } else {
//                         setErrorMessage('Invalid user ID or password');
//                     }
//                 }
//             })
//             .catch((err) => {
//                 console.error(err);
//                 setErrorMessage('Server error');
//             });
//     }

//     return (
//         <div>
//             <div className="login-container">
//                 <h3>LOGIN</h3>
//                 <br></br>
//                 <div className="input-field">
//                     USERNAME
//                     <input type="text" value={username}
//                         onChange={(e) => setUsername(e.target.value)} />
//                 </div>
//                 <br></br>
//                 <div className="input-field">
//                     PASSWORD
//                     <input type="password" value={password}
//                         onChange={(e) => setPassword(e.target.value)} />
//                 </div>
//                 <br></br>
//                 <button className="login-btn" onClick={handleApi}>LOGIN</button>
//                 <Link to="/signup" className="signup-link">SIGNUP</Link>
//                 {errorMessage && <p className="error-message">{errorMessage}</p>}
//             </div>
//         </div>
//     );
// }

// export default Login;
import { useState } from "react";
import Header from "./Header1";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './Login.css';

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleApi = () => {
        const url = 'http://localhost:4000/login';
        const data = { username, password };

        axios.post(url, data)
            .then((res) => {
                if (res.data.message) {
                    if (res.data.token) {
                        localStorage.setItem('token', res.data.token);
                        localStorage.setItem('userId', res.data.userId);
                        navigate('/');
                    } else {
                        setErrorMessage('Invalid user ID or password');
                    }
                }
            })
            .catch((err) => {
                console.error(err);
                setErrorMessage('Server error');
            });
    }

    return (
        <div>
            <div className="mainlogin">
                <div className="login-container">
                    <h3>LOGIN</h3>
                    <br></br>
                    <div className="input-field">
                        USERNAME
                        <input type="text" value={username}
                            onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <br></br>
                    <div className="input-field">
                        PASSWORD
                        <input type="password" value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <br></br>
                    <button className="login-btn" onClick={handleApi}>LOGIN</button>
                    {/* <Link to="/signup" className="signup-link">SIGNUP</Link> */}
                    <Link to="/signup" className="signup-link" style={{ color: 'white' , fontWeight: 'bold'}}>SIGNUP</Link>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                </div>
            </div>
        </div>
    );
}

export default Login;
