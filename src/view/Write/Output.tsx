import React from 'react';
import styled from 'styled-components';
import NumberSecation from './NumberSecation';
const Wrapper = styled.section`
  background:#fff;
  padding-top: 15px;

  div{
    font-size: 22px;
    color: #FD9300;
    font-weight: 600;
    margin:0 10px;
    padding-bottom: 6px ;
    padding-top: 14px;
    border-bottom: solid 1px #eee;
    span{
      font-size: 12px;
      color: #999;
      padding:6px 
    }
  }
`;

const Output :React.FC = () => {
  return <Wrapper>
    <div><span>￥</span>0.00</div>
  </Wrapper>
};
export default Output;