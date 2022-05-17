
import { signUp } from "./firebase";
import { useRef, useState } from "react";
import './index.css';


export default function App() {
  
  const [loadingData, setLoadingData] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSingUp() {
    setLoadingData(true);
    try {
      await signUp(emailRef.current.value, passwordRef.current.value);
      clearForm();
    } catch {
      alert("email já cadastrado");
    }    
    setLoadingData(false);
  }

  async function clearForm(){
    emailRef.current.value = "";
    passwordRef.current.value = "";
  }

  return (
     <div className="fields">
       
        <div>
        <h2> Cadastro </h2>
        <input ref={emailRef} type="text" placeholder="email"/> 
        <input ref={passwordRef} type="password"  placeholder="password"/> 

        <button
          type="submit"
          disabled={loadingData}
          onClick={() => {
            handleSingUp();
          }}
        >SingUp</button>
        </div>
     </div>
  )
}








