//import axios from "axios";
import { React } from "react";
import { useContext } from "react";
//import { useNavigate } from "react-router-dom";
import { context } from "../Context/Context";
import { useState } from "react";
import "./signup.css"

const SignUp = () => {
    const [user, setUser] = useState({});
    const { signUpUser } = useContext(context);
    // const navigator = useNavigate()
    const registration = () => {
        if (user.userEmail && user.password && user.confirm_password) {
            if (user.password === user.confirm_password) {
                signUpUser(user);
            }
            else { alert("password and Confirm_password are not same !") }
        }
        else {
            alert("Input field shouldn't be blank !")
        }

    }

    return (
        <div id="sign-up-container">

            <section id="middle">
                <h1>Sign Up</h1>

                <div>
                    <input className="input" type="email" placeholder="Email-ID" 
                    onChange={(e) => { setUser({ ...user, userEmail: e.target.value }) }} name="userEmail" />
                </div>
                <div>
                    <input className="input" type="password" placeholder="password" 
                    onChange={(e) => { setUser({ ...user, password: e.target.value }) }} name="password" />
                </div>
                <div>
                    <input className="input" type="password" placeholder=" confirm -password" 
                    onChange={(e) => { setUser({ ...user, confirm_password: e.target.value }) }} name="confirm password" />
                </div>
                <div>
                    <button onClick={registration}> continue</button>
                </div>
            </section>


        </div>
    )
}
export default SignUp