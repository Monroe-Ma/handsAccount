import React, { useState } from 'react';
import styled from 'styled-components';
type Props = {
 value:"o" | "-" | "+"  ;
  onChange: (value: "o" | "-" | "+")=>void
}
const Wrapper = styled.ol`
    display: flex;
    font-size: 16px;
    font-weight: 500;
    color: #999;  
    background: #EEEEEE;
    border-radius: 6px;
    >li{
      padding: 12px 30px;
      &.selected{
        background:#FFB101;
        color: #fff;
         border-radius: 6px;
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