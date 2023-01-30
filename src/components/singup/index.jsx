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

  async function handleGoogleSing() {
    await signInWithGoogle();
    setTimeout(() => {
     navigate('/dashboard'); 
     }, 1000 );
   }
  
  const handleSubmit = async (e) => {
    e.preventDefault();  

    if (email === '' || password === '') {
      toast.error('Os campos Email e password estão vazios');
      return;     
    } else {
      try {
        await signUp(email, password); 
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
    <div className="container">
      <form className='singUpForm shadow'onSubmit={handleSubmit} >
        <div>
          <h2> SignUp </h2>
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
            className='btn'
          >
            SingUp
          </button>
          <div className='line'></div>            
          
          <GoogleButton className="googleButton" 
          onClick={() => {handleGoogleSing()}}
        />
        </div>

        <p className="already">Already have an account? <Link to='/signin'>Login</Link></p>
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
