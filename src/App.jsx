
import './globalStyle.scss';
import { GlobalAuth } from './context/useAuthContext';
import { UseFireStoneDB } from './context/useFireStoneDB';
import { Routers } from './router'

export default function App() {
  
   
  return (
    <GlobalAuth>
      <UseFireStoneDB>
        <Routers>
          
        </Routers>
      </UseFireStoneDB>
    </GlobalAuth>
  );

}








