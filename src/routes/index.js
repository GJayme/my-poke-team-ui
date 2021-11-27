import {Route, Routes} from 'react-router-dom';
import {Signin} from '../pages/SignIn';
import {SignUp} from '../pages/SignUp';
import {PokeSearch} from '../pages/PokeSearch';
import {Dashboard} from '../pages/Dashboard';

const RoutesApp = () => (
  <Routes>
    <Route exact path="/" element={<Signin/>}/>
    <Route path="/cadastrar" element={<SignUp/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/search-pokes" element={<PokeSearch/>}/>
  </Routes>
);

export {RoutesApp};
