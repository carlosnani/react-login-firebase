import { signUp } from '../../firebase';
import { useRef, useState } from 'react';
import './style.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import GoogleButton from 'react-google-button'

export function SingUpForm() {

  const [loadingData, setLoadingData] = useState('');
  const emailRef = useRef();
  const passwordRef = useRef();


  async function handleSingUp(e) {
    e.preventDefault();
    if (emailRef.current.value === '' || passwordRef.current.value === '') {
      toast.warning('Preencha os campos de email e senha');
      return;
    } else {
      setLoadingData(true);
      try {
        await signUp(emailRef.current.value, passwordRef.current.value);
        clearForm();
        toast.success('Cadastro realizado com sucesso');
      } catch {
        toast.error('Email já cadastrado');
      }
      setLoadingData(false);
    }
  }

  function clearForm() {
    emailRef.current.value = '';
    passwordRef.current.value = '';
  }

  return (
    <div className="container">
      <form className='singUpForm shadow'>
        <div>
          <h2> Sing Up </h2>
          <input ref={emailRef} type='text' placeholder='email' />
          <input ref={passwordRef} type='password' placeholder='password' />

          <button
            type='submit'
            disabled={loadingData}
            onClick={(e) => {
              handleSingUp(e);
            }}
          >
            SingUp
          </button>
          <div className='line'>
            
          </div>
          <GoogleButton className="googleButton" 
          onClick={() => { console.log('Google button clicked') }}
        />
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
