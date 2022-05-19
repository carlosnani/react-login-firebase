import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./page/home";
import { SignUpPage } from "./page/signup";

export function Routers({children}) {
    return (
      <BrowserRouter>
      {children}
        <Routes>                
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<SignUpPage />} />

        </Routes>
      </BrowserRouter>            
    )
}