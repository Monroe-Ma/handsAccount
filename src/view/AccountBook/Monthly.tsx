import React, { useState } from 'react';
import styled from 'styled-components';
import { Month } from './Month';
import Icon from '../../component/Icon';
import { useRecords,RecordsItem } from 'hook/useRecound';
import useTag from 'hook/useTag';
import day from "dayjs"
import Category from './Category';
import dayjs from 'dayjs';
const Preparation = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin:17px 10px;
>div{
  font-size: 18px;
  >span{
    font-size:12px;
    color: #666;
  }
}
`;
const Bill = styled.ul`
  background: #fff;
>li{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin:10px 10px 0px 10px;
  border-bottom:1px solid #eee;
  padding: 8px 0;
  .listName{
    display: flex;
    align-items: center;
    
    >.iconBg{
      background: #FFF2E9;
      width: 26px;
      height: 26px;
      border-radius: 13px;
      display: flex;
      align-items: center;
      justify-content: center;
      .icon{
       fill:#FF9400
      }
    }
    >p{
      font-size: 15px;
      display: flex;
      flex-direction: column;
      margin-left: 7px;
        >span{
          font-size: 12px;
          color: #999;
          display: inline-block;
          line-height: 22px;
         }
}
}
.account{
  font-weight:600;
}
}
`;
type categoryType = "+" | "-" | "o";
const Monthly = () => { 
  const { getIconName, getTagName} = useTag()
  const { records} = useRecords()
  const [category,setCategory] =useState<categoryType>("-")
  const onChange = (category: categoryType) => { 
    setCategory(category)
  }
  const selectCategory = records.filter((r) => {
    if (category === '+' || category === '-') {
      return r.classification===category
    } else {
      return r
    }
  })
  const hash:{[K: string]:RecordsItem[]} = {}
  selectCategory.forEach((r) => { 
    const key = day(r.createdAt).format("YYYY年MM月DD日")
    if (!(key in hash)) { 
       hash[key]=[]
    }
    hash[key].push(r)
  }
  )
  const array = Object.entries(hash).sort((a,b)=>{
  if (a[0] === b[0]) return 0;
  if (a[0] > b[0]) return -1;
  if (a[0] < b[0]) return 1;
    return 0;
  })

  const Header = styled.h3`
   padding: 10px;
  `;

  const date = new Date()
  console.log(dayjs(date).format("MM月DD日"));
    console.log(date.getDate());
  return <div >
    <Month />
    <Preparation>
      <div className='date'>{ day(date).format("MM月DD日") }</div>
      <Category value={category} onChange={(category: "+" | "-" | "o") => onChange(category) } />
    </Preparation>

    {array.map(([time, records], i) => 
           
        <div key={i}>
          <Header>
            {time}
          </Header>
          {records.map((r) => {
            return <Bill>
              <li >
              <div className='listName'>
                <span className='iconBg'>
                   <Icon name={(r.tagIds.map((tagIds) => getIconName(tagIds))[0])} />
                </span>
                <p>{r.tagIds.map((tagIds) => getTagName(tagIds))[0]}
                   <span>{day(r.createdAt).format("HH:mm:ss")}</span>
                </p>
                </div>
                <div className='account'>
               { r.outputVal }
              </div>
            </li>
            </Bill>
      })}
        </div>
      
      ) }

    
  </div >
}
export {Monthly }




