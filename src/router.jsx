import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './page/home';
import { SignUp } from './page/signup';
import { SignIn } from './page/signin';
import { Dashboard } from './page/dashboard';

import { ProtectRoute } from './components/protectroute';

export function Routers({ children }) {
  return (
    <BrowserRouter>
      {children}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />

        {/* Rotas protegidas */}
        <Route
          path='/dashboard'
          element={
            <ProtectRoute>
                <Dashboard />
            </ProtectRoute>
        }/>

      </Routes>
    </BrowserRouter>
  );
}
