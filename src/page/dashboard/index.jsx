import React from 'react'
import { LogOutBtn } from '../../components/logoutBtn';
import { useContext } from 'react';
import { UseAuthContext } from '../../context/useAuthContext';

import './style.scss';

export function Dashboard() {

  const { user } = useContext(UseAuthContext);
  const infoUser = user.reloadUserInfo;    
     
  return (

    <div className="container">
      <h1>Dashboard</h1>
      <p>Welcome {infoUser.displayName ? infoUser.displayName : user.email }</p>
      <LogOutBtn />
    </div>
    
  )
}
