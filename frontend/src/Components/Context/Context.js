import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
export const context = createContext();

export const ContextProvider = (props) => {
  // const [email, setEmail] = useState("")
 
  const navigate = useNavigate();
 const signInUser =async(loginData)=>{
    await axios.post("http://localhost:8000/login", loginData)
      .then((res) => {
        console.log(res.data.token);
        if (res.data.message === "success") {
          localStorage.setItem("token", res.data.token)
          alert("signin Sucessull!")
          navigate("/recipes");
          document.location.reload();
        }
        if (res.data.message === "Unregistered") {
          alert("User not Registered !")
        }
        if (res.data.message === "Invalid") {
          alert("Invalid Crediential!")
        }
      })
      .catch(err => { console.log(err) })
  }

const signUpUser = (userData)=>{
    axios.post("http://localhost:8000/signUp",userData)
      .then((res) => {
        alert(res.data.message);
        navigate("/")
      })
      
      .catch(e => console.log(e))
  }
  

  const token = localStorage.getItem("token");
  const config = {
    headers: {
      token:token
    },
  };

// *************serching function ***************

  const myFunction = () => {
    
  };



  return (
    <context.Provider
    value ={
        {signInUser,
          signUpUser,
          myFunction
        }
      }
      >
      {props.children}
    </context.Provider>
  )
}