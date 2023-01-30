import { useContext } from 'react';
import { UseAuthContext } from '../../context/useAuthContext';
import { LogOutBtn } from '../../components/logoutBtn';

import './style.scss'; 

export const Menu = () => {

  const { user } = useContext(UseAuthContext);
  const { displayName, email, photoURL } = user; 

  return (
    <nav className="menu">
      <div className="container">
        
         <div className="menu-itens">

         <img src={photoURL}  alt="photoURL" />

         <div className="menu-info">
         <span>{displayName}</span>
         <span>{email}</span>
         </div>
          <LogOutBtn />      
         </div>
      </div>  
    </nav>
  )
}

 
