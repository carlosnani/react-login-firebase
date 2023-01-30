import React from 'react'
import { useContext } from 'react';
import { UseAuthContext } from '../../context/useAuthContext';
import { UseDBContext } from '../../context/useFireStoneDB';

import { Menu } from '../../components/menu';
import { Sidebar } from '../../components/sidebar';

import './style.scss';

export function Dashboard() {

  const { user } = useContext(UseAuthContext);
  const { displayName, email, photoURL } = user;

  const { teste, info }  = useContext(UseDBContext);
   
      
  return (

    <>
      <Menu />
      <div className="container">

        <div className="grid-container">
          
          <div className="sidebar">
            <Sidebar />
          </div>

          <div className="dashboard">
            Dashboard
          </div>

        </div>
      </div>
    </>
    
  )
}
