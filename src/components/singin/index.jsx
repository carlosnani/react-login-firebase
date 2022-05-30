import {Link} from 'react-router-dom';
import GoogleButton from 'react-google-button';
import './style.scss';

export function SingInForm() {
  return (
    <div>
      <form className='singInForm shadow'>
        <div>
          <h2> Sing In</h2>
          <input type='text' placeholder='email' />
          <input type='password' placeholder='password' />
          <button>Singin</button>
        </div>
         <div className='line'></div>                      
          <GoogleButton className="googleButton" 
          onClick={() => { console.log('Google button clicked') }}
        />
        <p className="already">Don't have an account? <Link to='/signup'>Sing Up</Link></p>
      </form>
    </div>
  );
}
