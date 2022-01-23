import React from 'react';
import Layout from 'component/Layout';
import { useTag } from 'hook/useTag';
import Icon from '../component/Icon';
import styled  from 'styled-components';
const TagsList = styled.ol`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
>li{
  background-color: #fff;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  padding: 25px 0;
  >span{
    width: 30px;
    height: 30px;
    border-radius:15px;
    background-color: #FFF2E9;
    display: flex;
    align-items: center;
    justify-content: center;
    >.icon{
      width: 16px;
      height: 16px;
    fill: #FF9400;
    }
  }
  >p{
    font-size: 14px;
    color: #666;
    line-height: 28px;
  }
}
`;
const Tags = () => { 
  const { tags,setTag}=useTag()



  
  return (
    <Layout title="标签分类">
       <TagsList>
      {tags.map(tag => 
       
          <li key={tag.id}>
          <span> <Icon name={tag.iconName }/></span> 
          <p>{ tag.name}</p>
          </li>
       
        )}
           </TagsList>
      </Layout>
  )

}
export default Tags