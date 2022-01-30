import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Month } from './Month';
import Icon from '../../component/Icon';
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
>ol{
    display: flex;
    background: #EEEEEE;
    color: #999;
    border-radius: 4px;
    >li{
      padding: 8px 11px;
      &.selected{
        background:#FFB101;
        color: #fff;
         border-radius: 4px;
      }
    }
  }
`;
const Bill = styled.ul`
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
const Monthly = () => { 

  return <div >

    <Month />
    <Preparation>
    <div>02/07<span>周四</span></div>
    <ol>
      <li className='selected'>全部</li>
      <li>支出</li>
      <li>收入</li>
    </ol>
    </Preparation>
    <Bill>
      <li>
        <div className='listName'>
         <span className='iconBg'> <Icon name="eat" /></span>
          <p>餐饮
            <span>16:33</span>
          </p>
        </div>
        <div className='account'>-15.00</div>
      </li> 
    </Bill>
  </div >
}
export {Monthly }