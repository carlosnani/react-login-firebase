import { signUp } from '../../firebase';
import { useRef, useState } from 'react';
import './style.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export function SingInForm() {

  const [loadingData, setLoadingData] = useState('');
  const emailRef = useRef();
  const passwordRef = useRef();



  async function handleSingUp() {
    setLoadingData(true);
    try {
      await signUp(emailRef.current.value, passwordRef.current.value);
      clearForm();
      toast.success('Cadastro realizado com sucesso');
    } catch {
      toast.error('email já cadastrado');
    }
    setLoadingData(false);
  }

  function clearForm() {
    emailRef.current.value = '';
    passwordRef.current.value = '';
  }

  return (
    <div className="container">
      <form className='singInform shadow'>
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

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        closeOnClick
        pauseOnHover
      />


    </div>
  );
}
