
import React, { useState } from 'react';
import styled from 'styled-components';
import day from "dayjs";
import { Input } from 'component/Input';


const Wrapper = styled.div`
background-color:#FF9400;
border-radius:0px  0px 40%  40% ;
`;
const MonthWrapper = styled.div`
background-color:#fff;
text-align: center;
margin: 0 10px;
padding: 20px 0;
border-radius: 16px;
box-shadow: 0 10px 30px 0 rgba(0,0,0,0.1);

>p{
  background-color:#F4F4F4;
  color: #333;
  padding: 10px 0;
  border-radius: 8px;
 width: 50%;
 margin-bottom: 20px;
    margin: 0 auto;
}
>ol{
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  >li{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 18px;
    font-weight: 600;
    >span{
      font-size: 12px;
      color: #999;
      margin-bottom: 15px;
      font-weight:400
      
    }
  }
}

`;
const MonthInput = styled(Input)`
 background: #f4f4f4;
 border: none;
 input[type=month]::-webkit-inner-spin-button{visibility: hidden;}
 `
const Month = () => { 
  const [createdAt,setCreatedAt] = useState(day(new Date()).format("YYYY-MM"))
//   const nowDate = () => {
//     let date = day(new Date()).format("YYYY-MM")
//     return date
//   }

// const datepickerOnChange = (date:string) => {
//   console.log(date)
//   }

  return <Wrapper>
      <MonthWrapper>
       <p >
        <MonthInput type="daytime-local" label=''
          defaultValue={day(new Date()).format("YYYY-MM")}
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => setCreatedAt(e.target.value)} />
      </p>  
       <ol>
         <li><span>本月支出</span>2380280.00</li>
         <li><span>本月收入</span>2380280.00</li>
      </ol>
       </MonthWrapper>
  </Wrapper>
}
export {Month}