import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`

  Button {
    background: #a3fd58;
    height: 40px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    color: #312e38;
    width: 60%;
    font-weight: 500;
    transition: background-color 0.2s;
    margin-bottom: 16px;

    &:hover {
      background: ${shade(0.2, '#a3fd58')};
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;