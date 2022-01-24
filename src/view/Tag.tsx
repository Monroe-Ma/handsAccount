import Layout from 'component/Layout';
import useTag from "hook/useTag"

import React from 'react';
import { useParams } from "react-router-dom"
import styled  from 'styled-components';
const Label = styled.label`
display: block;
  font-size: 17px;
  color: #333;
  font-weight: 600;
  padding: 10px 20px;
  >input{
    background: none;
    border: none;
    font-weight: 400;
    margin-left: 6px;
  }`
type Params = {
  id:string
}
const Tag = () => { 
    const { tags }=useTag()
    const { id } = useParams<Params>()
//   console.log(id);
// console.log(tags);
  const tag = tags.filter(tag => tag.id === parseInt(id))[0]

  return <Layout title="编辑标签">
 <Label >
        <input type="text" value={tag.name} 
        />
      </Label>
    
        </Layout>
}
export { Tag}