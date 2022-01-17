import styled, {createGlobalStyle} from 'styled-components';
import { Header, Anchor } from 'grommet';

export const HeaderSection = styled.div `
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  position: relative;
  background-color: #fff;
  padding-top: 5px;
  padding-bottom: 0px;
  margin-bottom: 0px;
  border-bottom: 1px solid #eaeaea;
`;

export const HeaderWrapper = styled(Header)`
  width: 1000px;
`;

export const SymbolLogo = styled(Anchor)`
  line-height:0px;
  :hover {
    color: #555;
    text-decoration: none;
  }
  :focus {
    color:#555;
    text-decoration: none;
  }
  :active {
    color: #555;
    text-decoration: none;
  }
`;

export const LoginAnchor = styled(Anchor)`
  color: #777;
  background: #FFF;
  border-radius: 0.25rem;
  padding: 0.7rem;
  :hover {
    color: #1A1311;
    background: #F0F0F0;
    text-decoration: none;
  }
  :focus {
    color: #1A1311;
    background: #F0F0F0;
    text-decoration: none;
  }
  :active {
    color: #1A1311;
    background: #F0F0F0;
    text-decoration: none;
  }
`;

export const SignupAnchor = styled(Anchor)`
  color: #FFF;
  background: #1A1311;
  border-radius: 0.25rem;
  padding: 0.7rem;
  :hover {
    color: #FFF;
    background: #777;
    text-decoration: none;
  }
  :focus {
    color: #FFF;
    background: #777;
    text-decoration: none;
  }
  :active {
    color: #FFF;
    background: #777;
    text-decoration: none;
  }
`;

