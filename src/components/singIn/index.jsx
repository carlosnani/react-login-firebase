import { signUp } from '../../firebase';
import { useRef, useState } from 'react';
import './style.scss';

export function SingInForm() {
  
  const [loadingData, setLoadingData] = useState('');
  const emailRef = useRef();
  const passwordRef = useRef();
 
  async function handleSingUp() {
    setLoadingData(true);
    try {
      await signUp(emailRef.current.value, passwordRef.current.value);
      clearForm();
    } catch {
      alert('email já cadastrado');
    }
    setLoadingData(false);
  }

  function clearForm() {
    emailRef.current.value = '';
    passwordRef.current.value = '';
  }  

  return (
   <div className="container">
      <form className='singInform'>
      <div>
        <h2> Cadastro </h2>
        <input ref={emailRef} type='text' placeholder='email' />
        <input ref={passwordRef} type='password' placeholder='password' />

        <button
          type='submit'
          disabled={loadingData}
          onClick={() => {
            handleSingUp();
          }}
        >
          SingUp
        </button>
      </div>
    </form>
   </div>
  );
}
