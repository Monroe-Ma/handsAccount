import Icon from 'component/Icon';
import Nav from 'component/Nav';
import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Monthly } from './AccountBook/Monthly';
const Wrapper = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
background: #fff;

`;
const TopWrapper = styled.div`
display: flex;
background: #FF9400;
justify-content: space-between;
color: #fff;
font-size: 18px;
font-weight: 600;
padding: 11px 15px;
 .icon{
   height: 22px;
   width: 22px;
   fill: #fff;
 }
`;
const Main = styled.main`
flex-grow: 1;
display: flex;
flex-direction: column;
`;
const Button = styled.button`
border: none;
background: none;
`;

const AccountBook = () => {
  let history = useHistory();
  function handleClick() {
    history.goBack();
  }

  return (
 <Wrapper>
    <TopWrapper> 
      <Button><Icon name="ArrowLeft" onClick={handleClick} /></Button>
      <p>账本</p>
        <Icon name="" />
      </TopWrapper>
      <Main>
   
    <Monthly  />

      </Main>
      <Nav />
  </Wrapper>
  )
}
  export default AccountBook;