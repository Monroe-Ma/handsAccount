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
       &.selected{
       color: #333;
     }
     
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
  value: "+" | "-";
  onChange: (value: "+" | "-")=>void
  
}
const ClassiFication: React.FC<Props> = (props) => {
  const ClassiFicationMap = { "+": "收入", "-": "支出" };
  const [ ClassiFicationMapList ] = useState< ("+" | "-")[]>(["+" , "-"])
  const ClassiFication =props.value
  return <Wrapper>
    <ul>
      {ClassiFicationMapList.map(
        (c, index) =>
          <li
            key={index}
            className={ClassiFication === c ? 'selected' : ""}
            onClick={() => props.onChange(c)  }
          >
        {ClassiFicationMap[c]} </li>
      )}
      
    </ul>
</Wrapper>
}
export default ClassiFication;