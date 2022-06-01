import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { UseAuthContext } from '../../context/useAuthContext';
import { Link, useNavigate } from 'react-router-dom';


export function ProtectRoute({ children }) {

  const { user  }  = useContext(UseAuthContext);

  const navigate = useNavigate();  

  if(!user){
    return (
      navigate('/')
    )  
  } else {
    return <>{children}</>
  } 
}
