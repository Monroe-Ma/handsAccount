import Layout from 'component/Layout';
import useTag from "hook/useTag"
import React from 'react';
import { useHistory, useParams } from "react-router-dom"
import styled from 'styled-components';
import Icon from '../component/Icon';
import { Input } from 'component/Input';

const Wrapper = styled.div`
 background-color: #fff;
 padding: 16px 0;
 margin:10px 0;
 >span{
    font-size: 17px;
  color: #333;
  font-weight: 600;
  padding: 10px 0;
  margin-left: 20px;
 }
 >input{
   border: none;
   font-size: 17px;
   margin-left: 10px;
 }
`;
const Button = styled.div`
display: flex;
justify-content: space-evenly;
position: absolute;
bottom: 84px;
left: 0;
right: 0;
  >button{
    background-color: #FF9400;
    color: #fff;
    padding: 14px 48px;
    border: none;
    border-radius: 100px;
  font-size: 18px;
  }
  >.cancel{
    border:2px solid #FF9400;
    background:none;
    color:#FF9400 ;
  }
`;
const NoExist = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color: #666;
/* margin-top: 280px; */
line-height: 30px;
position: fixed;
top: 50%;
bottom: 50%;
left: 0;
right: 0;
.icon{
  width: 106px;
  height: 106px;
  fill:#ddd;
  position: fixed;
  top: 36%;
  bottom: 0;
  left: 36%;
  right: 0;
}

`;
type Params = {
  id: string
}

const Tag = () => {
  const { findTag, updateTag, deleteTag } = useTag()
  const { id } = useParams<Params>()
  const tag = findTag(parseInt(id))
  // console.log(tag)
  const history = useHistory()
  const onClickBack = () => {
  history.goBack()
  }
  const tagContext = () => (
    <Wrapper>
     <span>标签名</span>
      <input
        value={tag.name}
        onChange={(e) => { updateTag(tag.id, { name: e.target.value}) }}
        />
      <Button>
        <button className="cancel" onClick={()=>deleteTag(tag.id) }>删除</button>
        <button onClick={onClickBack}>保存</button>
      </Button>
      </Wrapper>
  )
    return <Layout title="编辑标签">
      {tag ? tagContext() :
        <NoExist>
         < Icon name="tag"/>
        标签不存在</NoExist>}
    </Layout>
  }

export default Tag 