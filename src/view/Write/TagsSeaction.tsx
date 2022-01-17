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
      .icon{
        width: 27px;
       height: 27px;
      }
    }
  }
`;

const TagsSeaction = () => { 
  return (
    <Wrapper>
  <ul>
      <li>
        < Icon name="eat" />
        餐饮
      </li>
      <li>
        < Icon name="shopping" />
        购物
      </li>
      <li>
        < Icon name="traffic" />
        交通
      </li>
      <li>
        < Icon name="entertainment" />
        娱乐
      </li>
      <li>
         < Icon name="daily" />
        日用
      </li>
      <li>
         < Icon name="medical" />
        医疗
      </li>
      <li>
         < Icon name="snacks" />
        零食
      </li>
      <li>
         < Icon name="home" />
        房贷
      </li>
      <li>
         < Icon name="education" />
        文教
      </li>
      <li>
         < Icon name="add" />
        添加
        </li>
    </ul>
    </Wrapper>
  )
}
export default TagsSeaction;