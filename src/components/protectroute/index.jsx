import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { UseAuthContext } from '../../context/useAuthContext';
import { useNavigate } from 'react-router-dom';


export function ProtectRoute({ children }) {

  const { user } = useContext(UseAuthContext);
  const navigate = useNavigate();  

  if(!user){
    return (
      <div className="container">
        <h1>You need to be logged in to access this page</h1>
        <button onClick={() => navigate('/')}>Go to Login</button>
      </div>      
    )  
  } else {
    return <>{children}</>
  } 
}
