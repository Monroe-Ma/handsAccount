import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
background: #f6f6f6;
 display: flex;
 flex-direction: column;
 .pad{
text-align: center;
  >button{
     background: #fff;
     border: none;
     width: 24%;
     padding: 18px 0;
     text-align: center;
     float: left;
     margin: 2px;
     border-radius:8px;
     font-weight: 600;
     font-size: 18px;
     color: #333;
      }
    .zero{
      width: 49%;
    }
    .save{
      height: 110px;
      color: #fff;
      background: #FF9400;
      float: right;
    }
   }
`;
const NumberSecation : React.FC = () => { 
  return (
    <Wrapper>
      <div className='pad clearfix'>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>删除</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>清空</button>
      <button>7</button>
      <button>8</button>
        <button>9</button>
         <button className='save'>保存</button>
      <button className='zero'>0</button>
      <button>.</button>
     
        </div>

    </Wrapper>
      
  )
}
export default NumberSecation