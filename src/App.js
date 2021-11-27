import {GlobalStyle} from './styles/global';
import {BrowserRouter} from 'react-router-dom';
import {RoutesApp} from './routes';
import {UserProvider} from './context/userInfo';

function App() {
  return (
    <UserProvider>
      <>
        <BrowserRouter>
          <RoutesApp/>
        </BrowserRouter>
        <GlobalStyle/>
      </>
    </UserProvider>
  );
}

export default App;
