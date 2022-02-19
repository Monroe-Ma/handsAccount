
import React, { useState } from 'react';
import styled from 'styled-components';
import day from "dayjs";
import { DatePicker } from 'antd-mobile-v2';
import Icon from 'component/Icon';
import { useRecords } from 'hook/useRecords';
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
const HaButton = styled.button`
border: none;
padding:  10px 30px;
background-color: #f6f6f6;
border-radius: 8px;
color: #333;
font-size: 16px;
.icon{
  margin-left:8px;
  width: 10px;
  height: 10px;
  fill:#ddd
}
`;
const Month = () => { 
  const { records }=useRecords()
  const [selectMonth, setSelectMonth] = useState<Date>(new Date())
  const currentMouth = day(selectMonth).format("YYYY-MM")
  const selectMouthData = records.filter((r) => { return r.createdAt.indexOf(currentMouth) !== -1 })
  //选择月的总支出
  const selectMouthPay = selectMouthData.filter((c) => {return c.classification === "-" })
  let selectMouthPayMoney:number = 0
  selectMouthPay.forEach((c) => { selectMouthPayMoney = selectMouthPayMoney + c.outputVal })
  
  //选择月的总收入
  const selectMouthIn = selectMouthData.filter((c) => {return c.classification === "+" })
  let selectMouthInMoney:number = 0
  selectMouthIn.forEach((c) => { selectMouthInMoney = selectMouthInMoney + c.outputVal })

  return <Wrapper>
    <MonthWrapper>
    <DatePicker
          mode="month"
          extra="Optional"
          onChange={date => setSelectMonth(date)}
        >
          <HaButton>{currentMouth} <Icon name="xiajiantou" /> </HaButton>
    </DatePicker>   
       <ol>
        <li><span>本月支出</span> <p>{selectMouthPayMoney}</p></li>
        <li><span>本月收入</span><p>{ selectMouthInMoney}</p></li>
      </ol>
       </MonthWrapper>
  </Wrapper>
}
export {Month}