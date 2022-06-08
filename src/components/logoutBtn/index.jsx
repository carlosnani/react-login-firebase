import { useContext } from 'react';
import { UseAuthContext } from '../../context/useAuthContext';

export function LogOutBtn() {

  const { logOut }  = useContext(UseAuthContext);

  return (
    <button type="button" onClick={()=>{logOut()}}>
      logout x 
    </button>
  )
}
