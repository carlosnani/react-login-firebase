import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { UseAuthContext } from '../../context/useAuthContext';
import './style.scss';

 
export function SingUpForm() {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  
  const navigate = useNavigate();
  
  const { signUp, signInWithGoogle }  = useContext(UseAuthContext);
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();  

    if (email === '' || password === '') {
      toast.error('Email e password são requeridos');
      return;     
    } else {
      try {
        await signUp(email, password); 
        toast.success('Usuário criado com sucesso!'); 
        navigate('/signin');
      } catch (error) {      
        toast.error(error.message);
      }    
    }                
  };

  function clearForm() {
    email = '';
    password = '';
  }

  return (
    <div className="container">
      <form className='singUpForm shadow'onSubmit={handleSubmit} >
        <div>
          <h2> Sing Up </h2>
          <input 
            type='text' 
            placeholder='email'
            onChange={e => setEmail(e.target.value)}
            />
          <input 
            type='password'
              placeholder="password"
            onChange={e => setPassword(e.target.value)}
            />
          <button
            type='submit'
          >
            SingUp
          </button>
          <div className='line'></div>            
          
          <GoogleButton className="googleButton" 
          onClick={() => { console.log('Google button clicked') }}
        />
        </div>

        <p className="already">Already have an account? <Link to='/signin'>Sing in</Link></p>
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
