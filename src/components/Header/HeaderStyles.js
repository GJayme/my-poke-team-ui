import styled from 'styled-components';
import {shade} from 'polished';

export const Navbar = styled.nav`
  background-color: #ce403a;
  padding: 10px 20px;
  font-size: 25px;
`;

export const Container = styled.div`
  display: flex;
  
  a {
    color: #FFFF;
    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }
  }
  
  h3 {
    margin-left: 20px;
    a {
      font-size: 16px;
    }
  }
`;

