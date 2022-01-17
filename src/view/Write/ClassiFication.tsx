
import React, { useState } from 'react';
import styled from 'styled-components';
const Wrapper = styled.section`
  background: #fff;
  >ul{
     display: flex;
     justify-content: space-around;
     line-height: 20px;
   
     >li{
       font-size: 16px;
       font-weight: 500;
       color: #999;
       position: relative;
       padding: 17px 0;
     };
     &.selected{
       color: #333;
     }
     & .selected::after{
       content:"";
       height: 4px;
       width: 29px;
       display: block;
       background:#FD9300;
       border-radius: 2px;
       position: absolute;
       bottom: 0;
       left: 0;
     }
   }
`;
type Props = {
value:["+" , "-"]
  
}
const ClassiFication= () => {
  const ClassiFicationMap = { "+": "收入", "-": "支出" };
  const [ ClassiFicationMapList ] = useState< ("+" | "-")[]>(["+" , "-"])
  // const ClassiFication<("+" | "-")[]> =useState("+")
  return <Wrapper>
    <ul>
      {/* {ClassiFicationMapList.map(
        (c) => {
          <li
            className={ClassiFication === c ? 'selected' : ""}
        
          
          
          >{ClassiFicationMap[c]}</li>
        }

      )}
   */}
      <li className='selected'>支出</li>
       <li>收入</li>
    </ul>
</Wrapper>
}
export default ClassiFication;