import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import { ToastContainer, toast } from 'react-toastify';
import './style.scss';
import { UseAuthContext } from '../../context/useAuthContext';

export function SingInForm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  
  
  const { signIn, signInWithGoogle }  = useContext(UseAuthContext);

  async function handleGoogleSing() {
   await signInWithGoogle();
   setTimeout(() => {
    navigate('/dashboard'); 
    }, 1000 );
  }

  const handleSingIn = async (e) => {
    e.preventDefault();  

    if (email === '' || password === '') {
      toast.error('Os campos Email e password estão vazios');
      return;     
    } else {
      try {
        await signIn(email, password);         
        toast.success('Logado com sucesso');  
        setTimeout(() => {
          navigate('/dashboard'); 
        }, 2000 );
      } catch (error) {      
        toast.error(error.message);
      }    
    }                
  };

  return (
    <div>
      <form className='singInForm shadow' onSubmit={handleSingIn} >
        <div>
          <h2>Login</h2>
          <input 
          type='text' 
          placeholder='email'
          onChange={e => setEmail(e.target.value)}
          />
          <input 
          type='password'
          placeholder='password'
          onChange={e => setPassword(e.target.value)}
          />
          <button type='submit'>Login</button>
        </div>
        <div className='line'></div>
        <GoogleButton className="googleButton"
          onClick={() => {handleGoogleSing()}}
        />
        <p className="already">Don't have an account? <Link to='/signup'>Sing Up</Link></p>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        closeOnClick
        pauseOnHover
      />
    </div>
  );
}
