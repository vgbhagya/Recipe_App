import "./login.css"
import { useState,useContext } from "react";
import { context } from "../Context/Context";
//import axios from "axios"
//import { useNavigate } from "react-router-dom";


const Login = () => {
    //const navigator = useNavigate()
    const [login, setlogin] = useState({})
     const { signInUser } = useContext(context);

    const oldUser = async () => {
        if (login.userEmail && login.password) {
            signInUser(login)
        }
        else {
            alert("Input field shouldn't be Empty!")
        }

     }

    return (
        <div id="login-container">
            <section id="middle">
                <h1>Sign In</h1>
                <div>
                    <label>Email Address</label><br/>
                    <input className="input" type="text" placeholder="User-Email"
                     onChange={(e) => { setlogin({ ...login, userEmail: e.target.value }) }} 
                     name="userEmail" />
                </div>
                <div>
                    <label>Password</label><br/>
                    <input className="input" type="password" placeholder="Password"
                     onChange={(e) => { setlogin({ ...login, password: e.target.value }) }} 
                     name="password" />
                </div>
                <div>
                    <button type="submit"
                     onClick={oldUser}
                     >Submit</button>
                </div>
                <div>
                    <a href="/signUp">sign up</a>
                </div>
            </section>
        </div>
    )
}

export default Login;