import {Route, Routes} from 'react-router-dom';
import {SignIn, SignUp, PokeSearch, Dashboard} from '../pages';

const RoutesApp = () => (
  <Routes>
    <Route exact path="/" element={<SignIn/>}/>
    <Route path="/cadastrar" element={<SignUp/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/search-pokes" element={<PokeSearch/>}/>
  </Routes>
);

export {RoutesApp};
