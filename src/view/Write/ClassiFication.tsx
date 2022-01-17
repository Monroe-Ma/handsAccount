import { type } from 'os';
import React, { useState } from 'react';
import styled from 'styled-components';
const Wrapper = styled.section`
  background: #fff;
  >ul{
     display: flex;
     justify-content: space-around;
     line-height: 20px;
     padding: 17px 0;
     >li{
       font-size: 16px;
       font-weight: 500;
       color: #999;
       position: relative;
     };
     & .selected::after{
       content:"";
       color: #333;
       height: 4px;
       width: 29px;
       background:#FD9300;
       border-radius: 2px;
       position: absolute;
       bottom: 0;
       left: 0;
     }
   }
`;
type Props = {
  
}
const ClassiFication= () => {
  const ClassiFicationMap = { "+": "收入", "-": "支出" };
  const [ ClassiFicationMapList ] = useState< ("+" | "-")[]>(["+" , "-"])
  
  return <Wrapper>
    <ul>
      <li className='selected' >住处</li>
    </ul>
</Wrapper>
}
export default ClassiFication;