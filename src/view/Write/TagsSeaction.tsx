import React from 'react';
import styled from 'styled-components';

import Icon from './../../component/Icon';

const Wrapper = styled.section`
  background: #fff;
  >ul{
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 20px;
    >li{
      width: 20%;
      padding:0 20px;
      padding-top: 20px;
      color: #666;
      font-size: 14px;
      line-height: 22px;
      >span{
        display: block;
        width: 28px;
        height: 28px;
        border-radius: 14px;
        background-color:#f6f6f6;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        .icon{
        width: 18px;
        height: 18px;
        fill:#ddd;
      }
        &.selected{
          background-color:#FFF2E9;
         .icon{
           fill:#FF9400;
          }
      }
    }
  }
}
`;
type Props = {
  value: number[],
  onChange: (value: number[]) => void
}
const TagsSeaction: React.FC<Props> = (props) => {

  
  return (
    <Wrapper>
  <ul>
        <li>
          <span >
            < Icon name="eat" />
           </span>
        餐饮
      </li>
      <li>
          <span className='selected'>
            < Icon name="shopping" />
          </span>
        购物
      </li>
      <li> <span >
          < Icon name="traffic" />
           </span>
        交通
      </li>
      <li>
       <span>  < Icon name="entertainment" /> </span>
        娱乐
      </li>
      <li>
         <span> < Icon name="daily" /> </span>
        日用
      </li>
      <li>
        <span>  < Icon name="medical" /> </span>
        医疗
      </li>
      <li>
         <span> < Icon name="snacks" /> </span>
        零食
      </li>
      <li>
        <span>  < Icon name="home" /> </span>
        房贷
      </li>
      <li>
        <span>  < Icon name="education" /> </span>
        文教
      </li>
      <li>
        <span>  < Icon name="add" /> </span>
        添加
        </li>
    </ul>
    </Wrapper>
  )
}
export default TagsSeaction;