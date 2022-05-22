import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from './page/home';
import { SignUp } from './page/signup';
import { SignIn } from './page/signin';

export function Routers({children}) {
    return (
      <BrowserRouter>
      {children}
        <Routes>                
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />

           
          {/* <Route path="/signup" element={<SignUpPage />} /> 
          <Route path="/signin" element={<SignInPage />} />  */}

        </Routes>
      </BrowserRouter>            
    )
}