import React, { useState } from 'react';
import styled from 'styled-components';
type Props = {
 value:"o" | "-" | "+"  ;
  onChange: (value: "o" | "-" | "+")=>void
}
const Wrapper = styled.ol`
display: flex;
   
    color: #999;  
    border-radius: 4px;
    justify-content: center;
    border-radius: 4px;
    >li{
       background: #EEEEEE;
      padding: 9px 36px;
      &.selected{
        background:#FFB101;
        color: #fff;
         border-radius: 4px;
      }
    }
`;
const Category:React.FC<Props> = (props) => {
  const categoryMap = { "+": "收入", "-": "支出", "o": "全部" }
  const [categoryMapList]= useState<("+" | "-" | "o")[]>(["o" , "-" ,"+" ]);
  const category = props.value

 
  return <Wrapper>
    {categoryMapList.map((c) =>
      <li key={c}
        className={c === category ? "selected" : ""}
        onClick={() => { props.onChange(c)}}
      >
        { categoryMap[c]}
      </li>
    )}
    </Wrapper>
 }
export default Category 