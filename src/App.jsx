
import './globalStyle.scss';
import { GlobalAuth } from './context/useAuthContext';
import { Routers } from './router'

export default function App() {
  
  return (
    <GlobalAuth>
        <Routers>
          
        </Routers>
    </GlobalAuth>
  );

}








