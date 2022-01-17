import styled, {createGlobalStyle} from 'styled-components';
import { Main } from 'grommet';

export const Section = styled.div `
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  position: relative;
  background-color: #fff;
  padding-top: 5px;
  padding-bottom: 0px;
  margin: 10px 0px;
`;

export const MainWrapper = styled(Main)`
  width: 1000px;
`;