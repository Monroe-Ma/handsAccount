import React from 'react';
import Layout from 'component/Layout';
import useTag from "hook/useTag"
import Icon from '../component/Icon';
import styled  from 'styled-components';
import { Link } from 'react-router-dom';
const TagsList = styled.ol`
margin: 0 10px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
>li{
  background-color: #fff;
  width: 30%;
  margin-top: 10px;
  font-size: 14px;
 
  line-height: 28px;
    >a{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 25px 0;
    color: #666;
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
    }
}
>.newAdd{
  display: flex;
  flex-direction: column;
  align-items: center;
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
}
`;
const Tags = () => { 
  const { tags,addTag}=useTag()
  
  return (
    <Layout title="标签分类">
       <TagsList>
      {tags.map(tag => 
        <li key={tag.id}>
          <Link to={"/tags/"+tag.id }>
          <span> <Icon name={tag.iconName }/></span> 
            {tag.name}
            </Link>
        </li>
        
        )}
        <li className='newAdd' onClick={addTag}>
            <span><Icon name="add" /></span>添加
        </li>
           </TagsList>
      </Layout>
  )

}
export default Tags