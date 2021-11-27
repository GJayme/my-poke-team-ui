import {Link} from 'react-router-dom';

import {Container, Navbar} from './styles';
import {Logo} from '../Logo';

const Header = () => (
  <Navbar>
    <Container>
      <Logo size={40}/>
      <h1>
        <Link to={'/dashboard'}> my-poke-team</Link>
      </h1>
      <h3>
        <Link to={'/search-pokes'}>search-pokes</Link>
      </h3>
    </Container>
  </Navbar>
);

export {Header};
