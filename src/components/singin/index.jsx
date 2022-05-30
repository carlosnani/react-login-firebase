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
  
  const { signIn  }  = useContext(UseAuthContext);

  const handleSingIn = async (e) => {
    e.preventDefault();  

    if (email === '' || password === '') {
      toast.error('Os campos Email e password estão vazios');
      return;     
    } else {
      try {
        // await signUp(email, password); 
        toast.success('Usuário criado com sucesso!');         
        setTimeout(() => {
          navigate('/signin');
        }, 3000);
      } catch (error) {      
        toast.error(error.message);
      }    
    }                
  };

  return (
    <div>
      <form className='singInForm shadow' onSubmit={handleSingIn} >
        <div>
          <h2>SignIn</h2>
          <input type='text' placeholder='email' />
          <input type='password' placeholder='password' />
          <button>SignIn</button>
        </div>
        <div className='line'></div>
        <GoogleButton className="googleButton"
          onClick={() => { console.log('Google button clicked') }}
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
