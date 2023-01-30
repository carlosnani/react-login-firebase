import { useContext } from 'react';
import { UseAuthContext } from '../../context/useAuthContext';
import { AiOutlinePoweroff } from "react-icons/ai";

import './style.scss'

export function LogOutBtn() {

  const { logOut } = useContext(UseAuthContext);

  return (
    <div type="button" 
        className='btn-icon logOff'
        onClick={()=>{logOut()}}
        title="Log Out"   
      >
      <AiOutlinePoweroff />
    </div>
  )
}
