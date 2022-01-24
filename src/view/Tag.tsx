import Layout from 'component/Layout';
import useTag from "hook/useTag"

import React from 'react';
import { useHistory, useParams } from "react-router-dom"
import styled from 'styled-components';
// const Input = styled.input`
// background-color: #fff;
// `;
const Label = styled.label`
  display: block;
  font-size: 17px;
  color: #333;
  font-weight: 600;
  background-color: #fff;
  line-height: 44px;
  margin-top: 10px;
  padding-left: 10px;
  position: relative;
  >input{
    background: #fff;
    border: none;
    font-weight: 400;
    margin-left: 6px;
    color: #666;
  }`;
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
    padding: 8px 48px;
    border: none;
    border-radius: 4px;
  
  }
  >.cancel{
    border:2px solid #FF9400;
    background:none;
    color:#FF9400 ;
  }
`;
type Params = {
  id: string
}
const Tag = () => {
  const { tags, findTag, updateTag,deleteTag } = useTag()
  const { id } = useParams<Params>()
  const tag = findTag(parseInt(id))
  // console.log(tag)
   const  history = useHistory()
  const onClickBack = () => {
    history.goBack()
  return <Layout title="编辑标签">
    <Label >
      标签名
      <input type="text"
        value={tag.name}
        onChange={(e) => {
          updateTag(tag.id, { name: e.target.value });
          // console.log(updateTag);
        }
        }
      />
    </Label>
    <Button>
      <button className="cancel" onClick={deleteTag}>删除</button>
      <button onClick={onClickBack}>保存</button>
    </Button>
  </Layout>
}
export { Tag }